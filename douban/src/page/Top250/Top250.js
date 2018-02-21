import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import CircularProgress from 'material-ui/CircularProgress'
import Scroll from './../../base/Scroll/Scroll'
import Top250List from './../../component/Top250List/Top250List'
import * as top250Actions from './../../store/actions/top250Actions'
import style from './Top250.css'

function mapStateToProps (state) {
    return {
        top250List: state.top250List
    }
}

@connect(mapStateToProps, top250Actions)
class Top250 extends Component {
    
    getTop250Data = (params) => {
        this.props.getTop250(params)
    }

    render () {
        const { isReq, items, total, errMsg } = this.props.top250List
        return (
            <Scroll
                isReq={isReq}
                items={items}
                total={total}
                refresh={this.props.top250Refresh}
                getData={this.getTop250Data}
            >
                <section className={style['top250-wrapper']}>
                    <div className={style['top250-content']}>
                        <Top250List
                            top250List={items}
                        />
                    </div>
                    {/* loading */}
                    {
                        isReq && (
                            <div className={style['top250-loading']}>
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

export default Top250
