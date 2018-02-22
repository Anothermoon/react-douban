import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import style from './America.css'
import * as americaActions from './../../store/actions/americaActions'
import AmericaBoxList from './../../component/AmericaBoxList/AmericaBoxList'

function mapStateToProps (state) {
    return {
        americaList: state.americaList
    }
}

@connect(mapStateToProps, americaActions)
class America extends Component {

    componentWillMount () {
        this.getAmericaRank()
        window.scrollTo(0, 0)
    }

    onDetailClick = (id) => {
        const { history } = this.props
        history.push(`/movie/${id}`)
    }

    /**
     * 获取北美票房排行版
     */
    getAmericaRank = () => {
        this.props.getAmerica()
    }

    render () {
        const { isReq, errMsg, items } = this.props.americaList
        return (
            <section className={style['america-wrapper']}>
                <div className={style['america-content']}>
                    <AmericaBoxList
                    onDetailClick={this.onDetailClick}
                    list={items}/>   
                </div>
                {/* loading */}
                {
                    isReq && (
                        <div className={style['america-loading']}>
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

export default America
