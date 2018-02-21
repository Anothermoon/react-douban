import React, { Component } from 'react'
import style from './Comming.css'
import { connect } from 'react-redux'
import * as commingActions from './../../store/actions/commingActions'
import CircularProgress from 'material-ui/CircularProgress'
import ComingMoveList from './../../component/ComingMoveList/ComingMoveList'

function mapStateToProps (state) {
    return {
        commingMovieList: state.commingMovieList
    }
}

@connect(mapStateToProps, commingActions)
class Coming extends Component {

    componentWillMount () {
        this.getCommingMovieData()
        window.scrollTo(0, 0)
    }

    /**
     * 获取即将上映电影列表
     */
    getCommingMovieData = (params) => {
        this.props.getComming(params)
    }

    render () {
        const { isReq, items } = this.props.commingMovieList
        return (
            <section className={style['coming-wrapper']}>
                <div className={style['coming-content']}>
                    <ComingMoveList comingMoveList={items} />
                </div>
                {/* loading */}
                {
                    isReq && (
                        <div className={style['comming-loading']}>
                            <CircularProgress size={70} thickness={5}/>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default Coming
