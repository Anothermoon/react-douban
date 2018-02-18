/**
 * ActionCreator 生成器
 */
function makeActionCreator(type, ...key) {
    return function (...value) {
        let action = { type }
        key.forEach((item, index) => {
            action[key[index]] = value[index]
        })
        return action
    }
}

export default makeActionCreator