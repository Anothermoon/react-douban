import React, { Component } from 'react'
import { getHotMovieAjax } from './../../api/hot'

class Hot extends Component {
    componentWillMount () {
        getHotMovieAjax()
        this.getHotMovieData()
    }
    
    /**
     * 获取热门电影列表
     */
    getHotMovieData = () => {

    }

    render () {
        return (
            <div>热映</div>
        )
    }
}

export default Hot
