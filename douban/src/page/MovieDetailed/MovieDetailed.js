import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as detailActions from './../../store/actions/detailActions'
import style from './MovieDetailed.css'
import Paper from 'material-ui/Paper'
import { CardText } from 'material-ui/Card';

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

    /**
     * 获取电影详情数据 
     */
    getMovieDetail () {
        let curId = this.props.match.params.id
        let prevId = this.props.movieDetail.id
        // 避免重复的请求
        if (curId !== prevId) {
            this.props.detailClose()
            this.props.detailRefresh()
            this.props.getDetail(curId)
        }
    }

    render () {
        const { images, title, countries, genres, year, casts, summary } = this.props.movieDetail.detail
        const castsName = casts.map(item => item.name)
        return (
            <div className={style['detail-wrapper']}>
                <div
                    style={{
                        backgroundImage: `url(${images.medium})`
                    }}
                    className={style['detail-background']}></div>
                <Paper className={style['detail-header']} zDepth={5}>
                    <div className={style['detail-header-image']}>
                        <img
                            width="120"
                            alt=""
                            src={images.small}/>
                    </div>
                    <div className={style['detail-header-text']}>
                        <h4>{title}</h4>
                        <p>年代: {year}</p>
                        <p>地区: {countries.join(',')}</p>
                        <p>类型: {genres.join(',')}</p>
                        <p>主演: {castsName.join(',')}</p>
                    </div>
                </Paper>
                <CardText className={style['detail-header-summary']}>
                    电影简介：<br/>
                    {summary}
                </CardText>
            </div>
        )
    }
}

export default MovieDetailed
