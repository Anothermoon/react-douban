import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import style from './Hot.css'
import * as hotActions from './../../store/actions/hotActions'
import MoveList from './../../component/MoveList/MoveList'
import Scroll from './../../base/Scroll/Scroll'

function mapStateToProps (state) {
    return {
        hotMovieList: state.hotMovieList
    }
}

@connect(mapStateToProps, hotActions)
class Hot extends Component {

    /**
     * 获取热门电影列表
     */
    getHotMovieData = (params) => {
        this.props.getHot(params)
    }

    render () {
        const { isReq, errMsg, items, total } = this.props.hotMovieList
        return (
            <Scroll
                isReq={isReq}
                items={items}
                total={total}
                refresh={this.props.hotMovieRefresh}
                getData={this.getHotMovieData}
            >
                <section className={style['hot-wrapper']}>
                    <div className={style['hot-content']}>
                        <MoveList
                            list={items}
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
            </Scroll>
        )
    }
}

export default Hot
