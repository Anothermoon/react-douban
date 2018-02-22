import React, { Component } from 'react'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'
import TypeList from './../../component/TypeList/TypeList'
import style from './ConditionsSearch.css'
import { base } from './../../public/js/base'
import * as conditionsActions from './../../store/actions/conditionsActions'
import ChipList from './../../component/ChipList/ChipList'

function mapStateToProps (state) {
    return {
        termList: state.termList
    }
}

@connect(mapStateToProps, conditionsActions)
class ConditionsSearch extends Component {

    componentWillMount () {
        const { tagsStr } = this.props.termList
        this.getMovie({
            start: 0,
            tags: tagsStr
        })
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.termList.tagsStr !== this.props.termList.tagsStr) {
            this.props.termRefresh()
            this.getMovie({
                start: 0,
                tags: nextProps.termList.tagsStr
            })
        }
    }

    /**
     * 获取电影数据 
     */
    getMovie = (params) => {
        const { getTermMovie } = this.props
        getTermMovie(params)
    }
    
    /**
     * 点击标签
     */
    onTagsClick = (value) => {
        const { termAddTags } = this.props
        termAddTags(value)
    }

    /**
     * 删除搜索标签 
     */
    onTagsDelete = (key) => {
        const { termDeleteTags } = this.props
        termDeleteTags(key)
    }

    render () {
        const { form, type, region } = base
        const { tags, isReq } = this.props.termList
        return (
            <section className={style['conditions-search-wrapper']}>
                <div className={style['type-list-wrapper']}>
                    <TypeList
                        type={'form'}
                        tags={tags}
                        onTagsClick={this.onTagsClick}
                        list={form}/>
                </div>
                <div className={style['type-list-wrapper']}>
                    <TypeList
                        type={'type'}
                        tags={tags}
                        onTagsClick={this.onTagsClick}
                        list={type}/>
                </div>
                <div className={style['type-list-wrapper']}>
                    <TypeList
                        type={'region'}
                        tags={tags}
                        onTagsClick={this.onTagsClick}
                        list={region}/>
                </div>
                <ChipList
                    onTagsDelete={this.onTagsDelete}
                    list={tags}
                />
                {/* loading */}
                {
                    isReq && (
                        <div className={style['conditions-loading']}>
                            <CircularProgress size={70} thickness={5}/>
                        </div>
                    )   
                }
            </section>
        )
    }
}

export default ConditionsSearch
