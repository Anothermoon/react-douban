import React, { Component } from 'react'
import style from './Search.css'
import SearchInput from './../../component/SearchInput/SearchInput'
import SearchList from './../../component/SearchList/SearchList'

class Search extends Component {
    constructor () {
        super()
        this.state = {
            value: ''
        }
    }

    /**
     * 搜索框变化
     * @param {String} value 搜索框内容
     */
    onInputChange = (value) => {
        this.setState({
            value
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
    
    render () {
        const { value } = this.state
        return (
            <section className={style['search-wrapper']}>
                <SearchInput
                    onInputClose={this.onInputClose}
                    onInputChange={this.onInputChange}
                    value={value}/>
                <SearchList/>
            </section>
        )
    }
}

export default Search