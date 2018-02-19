import React, { Component } from 'react'

class SearchInput extends Component {

    /**
     * 搜索框输入
     */
    handleInputChange (ev) {

    }

    render () {
        return (
            <div>
                <i class="iconfont icon-sousuo"></i>
                <input type="text" onChange={this.handleInputChange}/>
                <i class="iconfont icon-cuowu"></i>
            </div>
        )
    }
}

export default SearchInput