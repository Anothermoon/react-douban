import React, { Component } from 'react'
import style from './Search.css'
import Snackbar from 'material-ui/Snackbar'
import SearchInput from './../../component/SearchInput/SearchInput'
import SearchList from './../../component/SearchList/SearchList'
import { connect } from 'react-redux'
import * as searchActions from './../../store/actions/searchActions'
import Throttle from './../../util/Throttle'

function mapStateToProps (state) {
    return {
        searchResultsList: state.searchResultsList
    }
}

@connect(mapStateToProps, searchActions)
class Search extends Component {
    constructor () {
        super()
        this.state = {
            value: ''
        }
        this.search = null
    }

    componentWillMount () {
        // 函数节流
        this.search = Throttle((value, start) => {
            this.props.search({
                value,
                start
            })
        }, 400)
    }

    /**
     * 搜索框变化
     * @param {String} value 搜索框内容
     */
    onInputChange = (value) => {
        this.setState({
            value
        }, () => {
            const { value } = this.state
            // 每次都是从第一页开始搜索
            this.search(value, 0)
        })
    }

    /**
     * 清空搜索框
     */
    onInputClose = () => {
        this.setState({
            value: ''
        })
    }

    /**
     * 搜索下一页
     */
    onResultNextPage = () => {
        const { value } = this.state
        const { items } = this.props.searchResultsList
        this.search(value, items.length)
    }
    
    render () {
        const { value } = this.state
        const { items, errMsg, isAll } = this.props.searchResultsList
        return (
            <section className={style['search-wrapper']}>
                <SearchInput
                    onInputClose={this.onInputClose}
                    onInputChange={this.onInputChange}
                    value={value}/>
                {/* 搜索结果 */}
                {
                    value !== '' && (
                        <SearchList
                            onResultNextPage={this.onResultNextPage}
                            result={items}
                            isAll={isAll}
                        />
                    )
                }
                {/* 错误弹窗 */}
                <Snackbar
                    open={errMsg !== ''}
                    message={errMsg}
                    autoHideDuration={3000}
                />
            </section>
        )
    }
}

export default Search
