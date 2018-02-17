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
