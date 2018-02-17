# react-douban
react／react-router／redux／axios／ material-ui

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
