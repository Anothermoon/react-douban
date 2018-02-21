import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import * as hotActions from './../../store/actions/hotActions'
import style from './Hot.css'
import HotMovieList from './../../component/HotMovieList/HotMovieList'

function mapStateToProps (state) {
    return {
        hotMovieList: state.hotMovieList
    }
}

@connect(mapStateToProps, hotActions)
class Hot extends Component {

    constructor (props) {
        super(props)
        this.scroll = this.onScroll.bind(this) 
    }
    
    componentWillMount () {
        this.getHotMovieData()
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
        console.log('???')
        let { isReq, items, total } = this.props.hotMovieList
        let body = document.querySelector('body')
        let viewHeight = document.documentElement.clientHeight
        let contentHeight = body.clientHeight
        let scrollTop = document.documentElement.scrollTop
        let maxScrollTop = contentHeight - viewHeight
        if (maxScrollTop - 100 < scrollTop && !isReq && items.length < total) {
            this.props.hotMovieRefresh()
            this.getHotMovieData({
                start: items.length,
                count: 20
            })
        }
    }
    
    /**
     * 获取热门电影列表
     */
    getHotMovieData = (params) => {
        this.props.getHot(params)
    }

    render () {
        const { isReq, errMsg, items } = this.props.hotMovieList
        return (
            <section className={style['hot-wrapper']}>
                <div className={style['hot-content']}>
                    <HotMovieList
                        hotMovieList={items}
                    />
                </div>
                {/* loading */}
                {
                    isReq && (
                        <div className={style['hot-loading']}>
                            <CircularProgress size={70} thickness={5}/>
                        </div>
                    )   
                }
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

export default Hot
