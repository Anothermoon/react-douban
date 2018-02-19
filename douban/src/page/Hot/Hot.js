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
    
    componentWillMount () {
        setTimeout(() => {
            console.log(this.props)
        }, 5000)
        this.getHotMovieData()
    }
    
    /**
     * 获取热门电影列表
     */
    getHotMovieData = () => {
        this.props.getHot({
            start: 0,
            count: 20
        })
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
                    isReq && <CircularProgress className={style['hot-loading']} size={60} thickness={7}/>
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
