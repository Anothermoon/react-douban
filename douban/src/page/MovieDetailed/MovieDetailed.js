import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as detailActions from './../../store/actions/detailActions'

function mapStateToProps (state) {
    return {
        movieDetail: state.movieDetail
    }
}

@connect(mapStateToProps, detailActions)
class MovieDetailed extends Component {

    componentWillMount () {
        this.getMovieDetail()
    }

    componentWillUnmount () {

    }

    /**
     * 获取电影详情数据 
     */
    getMovieDetail () {
        const { id } = this.props.match.params
        this.props.getDetail(id)
    }

    render () {
        return (
            <div>电影详情</div>
        )
    }
}

export default MovieDetailed
