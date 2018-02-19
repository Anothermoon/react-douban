import React, { Component } from 'react'
import style from './Search.css'
import Snackbar from 'material-ui/Snackbar'
import SearchInput from './../../component/SearchInput/SearchInput'
import SearchList from './../../component/SearchList/SearchList'
import { connect } from 'react-redux'
import * as searchActions from './../../store/actions/searchActions'
import CircularProgress from 'material-ui/CircularProgress'
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
        this.search = Throttle((value) => {
            // 每次都是从第一页开始搜索
            this.props.search({
                value,
                start: 0
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
            this.search(value)
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

    }
    
    render () {
        const { value } = this.state
        const { items, isReq, errMsg } = this.props.searchResultsList
        return (
            <section className={style['search-wrapper']}>
                <SearchInput
                    onResultNextPage={this.onResultNextPage}
                    onInputClose={this.onInputClose}
                    onInputChange={this.onInputChange}
                    value={value}/>
                <SearchList result={items}/>
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
