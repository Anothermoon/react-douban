import React, { Component } from 'react'
import style from './SearchInput.css'
import TextField from 'material-ui/TextField'

class SearchInput extends Component {

    /**
     * 搜索框输入
     * @param {Object} ev event
     * @param {String} newValue 搜索框内容
     */
    handleInputChange = (ev, newValue) => {
        this.props.onInputChange(newValue)
    }

    /**
     * 清空搜索框
     */
    handleInputClose = () => {
        this.props.onInputClose()
    }

    render () {
        const { value } = this.props
        return (
            <div className={style['input-wrapper']}>
                <TextField
                    value={value}
                    onChange={this.handleInputChange}
                    hintText="搜索电影"
                    className={style['input-text']}
                />
                {
                    value !== '' && <i className="iconfont icon-cuowu" onClick={this.handleInputClose}></i>
                }
            </div>
        )
    }
}

export default SearchInput