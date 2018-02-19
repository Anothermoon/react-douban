import React, { Component } from 'react'
import DdHeader from './component/DbHeader/DbHeader'
import DdDrawer from './component/DbDrawer/DbDrawer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncRouterComponent from './util/AsyncRouterComponent'
import './App.css'

const AsyncHot = AsyncRouterComponent(() => import('./page/Hot/Hot'))
const AsyncAmerica = AsyncRouterComponent(() => import('./page/America/America'))
const AsyncComing = AsyncRouterComponent(() => import('./page/Coming/Coming'))
const AsyncNewMovie = AsyncRouterComponent(() => import('./page/NewMovie/NewMovie'))
const AsyncTop250 = AsyncRouterComponent(() => import('./page/Top250/Top250'))
const AsyncPublicPraise = AsyncRouterComponent(() => import('./page/PublicPraise/PublicPraise'))
const AsyncSearch = AsyncRouterComponent(() => import('./page/Search/Search'))
const AsyncLoginRegister = AsyncRouterComponent(() => import('./page/LoginRegister/LoginRegister'))

class App extends Component {
  constructor () {
    super()
    this.state = {
      // 侧边栏开关
      openDrawer: false
    }
  }
  
  /**
   * 弹出侧边菜单
   */
  handleLeftIconClick = () => {
    this.setState((prevState, props) => {
      return {
        openDrawer: !prevState.openDrawer
      }
    })
  }

  /**
   * 关闭侧边菜单
   */
  handleCloseDrawer = () => {
    this.setState({
      openDrawer: false
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <DdHeader
              onLeftIconClick={this.handleLeftIconClick}
              title="豆瓣电影"/>
            <DdDrawer
              onCloseDrawer={this.handleCloseDrawer}
              onLeftIconClick={this.handleLeftIconClick}
              open={this.state.openDrawer}/>
            <div>
                <Route path="/hot" component={AsyncHot}/>
                <Route path="/coming" component={AsyncComing}/>
                <Route path="/top250" component={AsyncTop250}/>
                <Route path="/publicpraise" component={AsyncPublicPraise}/>
                <Route path="/america" component={AsyncAmerica}/>
                <Route path="/newmovie" component={AsyncNewMovie}/>
                <Route path="/search" component={AsyncSearch}/>
                <Route path="/loginregister" component={AsyncLoginRegister}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
