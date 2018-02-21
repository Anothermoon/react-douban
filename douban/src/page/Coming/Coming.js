import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as commingActions from './../../store/actions/comingActions'
import CircularProgress from 'material-ui/CircularProgress'
import ComingMovieList from './../../component/ComingMovieList/ComingMovieList'
import style from './Coming.css'

function mapStateToProps (state) {
    return {
        comingMovieList: state.comingMovieList
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
        const { isReq, items } = this.props.comingMovieList
        return (
            <section className={style['coming-wrapper']}>
                <div className={style['coming-content']}>
                    <ComingMovieList ComingMovieList={items} />
                </div>
                {/**/}
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
