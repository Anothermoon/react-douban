import React, { Component } from 'react'
import { getHotMovieAjax } from './../../api/hot'
import { connect } from 'react-redux'

function mapStateToProps (state) {
    return {
        hotMovieList: state.hotMovieList
    }
}

@connect(mapStateToProps)
class Hot extends Component {
    componentWillMount () {
        console.log(this.props)
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
