import React, { Component } from 'react'
import style from './HotMovie.css'
import LazyLoad from 'react-lazyload'
import CircularProgress from 'material-ui/CircularProgress'
import first from './../../public/image/first.png'
import second from './../../public/image/second.png'
import third from './../../public/image/third.png'
import PropTypes from 'prop-types'

class HotMovie extends Component {
    constructor (props) {
        super(props)
        this.image = [first, second, third]
    }

    static propTypes = {
        casts: PropTypes.arrayOf(PropTypes.object),
        genres: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        images: PropTypes.object,
        index: PropTypes.number,
        rank: PropTypes.any,
        rating: PropTypes.object,
        subtype: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string
    }

    /**
     * 进入详情页
     * @param {Number} id 电影id
     */
    handleDetailClick = (id) => {
        this.props.onDetailClick(id)
    }

    render () {
        const { title, year, images, casts, index, rank, id } = this.props
        return (
            <li className={style['item']} onClick={() => this.handleDetailClick(id)}>
                <div>
                    <LazyLoad
                        once
                        resize={true}
                        scroll={true}
                        height={280}
                        debounce={350}
                        placeholder={
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '170px',
                                height: '238px'
                            }}>
                                <CircularProgress size={20} thickness={1}/>
                            </div>
                        }
                    >
                        <img width="170" height="238" src={images.medium} alt=""/>
                    </LazyLoad>
                </div>
                <div className={style['text-wrapper']}>
                    {
                        rank && (
                            <div className={style['text-left']}>
                                {
                                    index <= 2 ? 
                                    (<img src={this.image[index]} alt="" width="30"/>) : 
                                    (<span className={style['number']}>{index}.</span>)
                                }
                            </div>
                        )
                    }
                    <div className={style['text-right']}>
                        <p className={`${style['text']} ${ !rank ? style['text-rank'] : ''}`}>{title}</p>
                        <p className={`${style['text']} ${ !rank ? style['text-rank'] : ''}`}>年代：{year}</p>
                        <p className={`${style['text']} ${ !rank ? style['text-rank'] : ''}`}>
                            主演：
                            {
                                casts.map((item, index) => {
                                    if (index < casts.length - 1) {
                                        return (
                                            `${item.name},`
                                        )
                                    } else {
                                        return (
                                            `${item.name}`
                                        )
                                    }
                                })
                            }
                        </p>
                    </div> 
                </div>
            </li>
        )
    }
}

export default HotMovie
