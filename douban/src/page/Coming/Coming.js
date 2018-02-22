import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import CircularProgress from 'material-ui/CircularProgress'
import * as commingActions from './../../store/actions/comingActions'
import style from './Coming.css'
import MoveList from './../../component/MoveList/MoveList'
import Scroll from './../../base/Scroll/Scroll'

function mapStateToProps (state) {
    return {
        comingMovieList: state.comingMovieList
    }
}

@connect(mapStateToProps, commingActions)
class Coming extends Component {

    onDetailClick = (id) => {
        const { history } = this.props
        history.push(`/movie/${id}`)
    }

    /**
     * 获取即将上映电影列表
     */
    getCommingMovieData = (params) => {
        this.props.getComming(params)
    }

    render () {
        const { isReq, items, errMsg, total } = this.props.comingMovieList
        return (
            <Scroll
                isReq={isReq}
                items={items}
                total={total}
                refresh={this.props.commingMovieRefresh}
                getData={this.getCommingMovieData}
            >
                <section className={style['coming-wrapper']}>
                    <div className={style['coming-content']}>
                        <MoveList
                            onDetailClick={this.onDetailClick}
                            list={items}
                        />
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
            </Scroll>
        )
    }
}

export default Coming
