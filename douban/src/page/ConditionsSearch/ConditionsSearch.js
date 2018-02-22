import React, { Component } from 'react'
import Chip from 'material-ui/Chip'
import { connect } from 'react-redux'
import TypeList from './../../component/TypeList/TypeList'
import style from './ConditionsSearch.css'
import { base } from './../../public/js/base'
import * as conditionsActions from './../../store/actions/conditionsActions'

function mapStateToProps (state) {
    return {
        termList: state.termList
    }
}

@connect(mapStateToProps, conditionsActions)
class ConditionsSearch extends Component {
    
    /**
     * 点击标签
     */
    onTagsClick = (value) => {
        const { termAddTags } = this.props
    }

    /**
     * 删除搜索标签 
     */
    onTagsDelete = () => {

    }

    render () {
        const { form, type, region } = base
        const { tags } = this.props.termList
        const termList = [form, type, region]
        return (
            <section className={style['conditions-search-wrapper']}>
                {
                    termList.map((item, index) => {
                        return (
                            <div className={style['type-list-wrapper']} key={index}>
                                <TypeList
                                    onTagsClick={this.onTagsClick}
                                    list={item}/>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}

export default ConditionsSearch
