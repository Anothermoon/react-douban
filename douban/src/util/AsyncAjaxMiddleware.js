function AsyncAjaxMiddleware ({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            const {
                types,
                callAPI,
                cacheAPI,
                payload
            } = action

            // 验证参数
            if (!types) {
                next(action)
            }

            if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'String')) {
                throw new Error('Expected an array of three string types')
            }

            if (typeof cacheAPI !== 'function') {
                throw new Error('Expected fetch to be a function')
            }

            // 缓存，避免多余的请求
            if (!cacheAPI(getState())) {
                return
            }

            // const [requestType, respoceType, errorType] = types

            // // 请求开始
            // dispatch()

            // return callAPI().then((res) => {
            //     dispatch()
            // }).catch((err) => {

            // })
        }
    }
}