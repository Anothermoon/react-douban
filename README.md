# react-douban
react／react-router／redux／axios／ material-ui

#### 登陆注册功能

> 使用了策略模式进行表单验证，避免了大量的if else 语句

```
```

#### create-react-app 中使用字体图标

```
// 注意字体文件的路径，不能直接使用./../xxx 需要 ../../xxx，具体原因我不太明白
// stack中找到了类似的问题。链接如下
https://stackoverflow.com/questions/41408976/how-to-use-local-webfont-in-imported-sass-file

// 修改webpack的配置文件
{
    test: [/\.woff2$/, /\.eot$/, /\.ttf$/, /\.otf$/],
    loader: require.resolve('url-loader'),
    options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
    }
},

// 修改iconfont.css
// 记得使用全局:global()全局样式

@font-face {font-family: "iconfont";
  src: url('../icon/iconfont.eot?t=1519034602999'); /* IE9*/
  src: url('../icon/iconfont.eot?t=1519034602999#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('../icon/iconfont.ttf?t=1519034602999') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../icon/iconfont.svg?t=1519034602999#iconfont') format('svg'); /* iOS 4.1- */
}

:global(.iconfont) {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:global(.icon-cuowu:before) { content: "\e641"; }

:global(.icon-jushoucang:before) { content: "\e643"; }

:global(.icon-sousuo:before) { content: "\e651"; }

:global(.icon-xiangshangjiantou:before) { content: "\e65d"; }

:global(.icon-xiangxiajiantou:before) { content: "\e65e"; }

:global(.icon-xiangyoujiantou:before) { content: "\e65f"; }

:global(.icon-xiangzuojiantou:before) { content: "\e660"; }

```

#### css 模块化

```
// webpack.config.dev.js
{
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        modules: true
    },
},

// webpack.config.prod.js
{
    loader: require.resolve('css-loader'),
    options: {
    importLoaders: 1,
    minimize: true,
    sourceMap: shouldUseSourceMap,
    modules: true
    },
},
```

#### less的添加

```
// webpack.config.dev.js
{
    test: /\.(css|less)$/,
    use: [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                    importLoaders: 1,
                    modules: true
            },
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                        }),
                    ],
                },
            },
        {
            loader: require.resolve('less-loader')
        }
    ],
},

// webpack.config.prod.js
{
    test: /\.(css|less)$/,
    loader: ExtractTextPlugin.extract(
        Object.assign(
        {
            fallback: {
            loader: require.resolve('style-loader'),
            options: {
                hmr: false,
            },
            },
            use: [
            {
                loader: require.resolve('css-loader'),
                options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: shouldUseSourceMap,
                modules: true
                },
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                    browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                    }),
                ],
                },
            },
            {
                loader: require.resolve('less-loader')
            }
            ],
        },
        extractTextPluginOptions
        )
    ),
    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
},
```

#### react-router 异步加载组件

```
import React, { Component } from 'react'

function AsyncComponent (importComponent) {
    return class AsyncRouterComponent extends Component {
        constructor (props) {
            super(props)
            this.state = {
                component: null
            }
        }

        async componentDidMount () {
            const { default: component } = await importComponent()
            this.setState({
                component: component
            })
        }

        render () {
            const component = { this.state }

            return (
                component ? <component {...this.props}/> : null
            )
        }
    }
}

export default AsyncComponent
```

#### Throttle

```
function Throttle (fn, delay = 500) {
    let self = fn
    let timer = null
    let isFirst = false

    return function (...rest) {
        if (!isFirst) {
            self(...rest)
        }

        if (timer) {
            return
        }

        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            self(...rest)
        }, delay)
    }
}

export default Throttle

```

#### 自定义Link

```
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import style from './CustomLink.css'

class CustomLink extends Component {
    render () {
        let { to, children, ...rest } = this.props
        return (
            <Route path={to} children={({ match }) => {
                return (
                    <div>
                        <Link
                            className={`${style['link']} ${match ? style['active-link'] : ''}`}
                            to={to}
                            {...rest}>
                            { children }
                        </Link>
                    </div>
                )
            }} />
        )
    }
}

export default CustomLink

```
