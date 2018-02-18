import React, { Component } from 'react'
import { getHotMovieAjax } from './../../api/hot'
import { connect } from 'react-redux'

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

function selete (state) {
    console.log(state)
    return state
}

export default connect(selete)(Hot)
