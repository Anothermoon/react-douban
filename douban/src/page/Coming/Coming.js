import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import CircularProgress from 'material-ui/CircularProgress'
import * as commingActions from './../../store/actions/comingActions'
import ComingMovieList from './../../component/ComingMovieList/ComingMovieList'
import style from './Coming.css'

function mapStateToProps (state) {
    return {
        comingMovieList: state.comingMovieList
    }
}

@connect(mapStateToProps, commingActions)
class Coming extends Component {

    constructor (props) {
        super(props)
        this.scroll = this.onScroll.bind(this)
    }

    componentWillMount () {
        this.getCommingMovieData()
        this.addEventScroll()
        window.scrollTo(0, 0)
    }

    componentWillUnmount () {
        this.removeEventScroll()
    }

    /**
     * window添加scroll事件
     */
    addEventScroll () {
        window.addEventListener('scroll', this.scroll)
    }

    /**
     * window删除scroll事件
     */
    removeEventScroll () {
        window.removeEventListener('scroll', this.scroll)
    }

    /**
     * scroll事件
     */
    onScroll (ev) {
        let { isReq, items, total } = this.props.comingMovieList
        let body = document.querySelector('body')
        let viewHeight = document.documentElement.clientHeight
        let contentHeight = body.clientHeight
        let scrollTop = document.documentElement.scrollTop
        let maxScrollTop = contentHeight - viewHeight
        if (maxScrollTop - 100 < scrollTop && !isReq && items.length < total) {
            this.props.commingMovieRefresh()
            this.getCommingMovieData({
                start: items.length,
                count: 20
            })
        }
    }

    /**
     * 获取即将上映电影列表
     */
    getCommingMovieData = (params) => {
        this.props.getComming(params)
    }

    render () {
        const { isReq, items, errMsg } = this.props.comingMovieList
        return (
            <section className={style['coming-wrapper']}>
                <div className={style['coming-content']}>
                    <ComingMovieList ComingMovieList={items} />
                </div>
                {/* 错误弹窗 */}
                <Snackbar
                    open={errMsg !== ''}
                    message={errMsg}
                    autoHideDuration={3000}
                />
                {/* loading */}
                {
                    isReq && (
                        <div className={style['coming-loading']}>
                            <CircularProgress size={70} thickness={5}/>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default Coming
