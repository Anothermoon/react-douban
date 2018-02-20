// 策略类(验证规则)
const formStrategy = {
    /**
     * 不为空
     * @param {String} val 内容
     * @param {String} err 错误信息
     */
    notNull (val, err) {
        let newVal = val.replace(/(^\s+)|(\s+$)/g, "")
        if (newVal === '') {
            return err
        }
    },

    /**
     * 密码验证
     * @param {Stirng} val 内容
     * @param {String} err 错误信息
     */
    password (val, err) {
        if (!/^[a-zA-Z]\w{5,17}$/.test(val)) {
            return err
        }
    },

    /**
     * 密码不能重复
     * @param {Array} val 前一次输入的密码以及后一次输入的密码
     * @param {String} err 错误信息
     */
    passwordNotRepeat (val, err) {
        if (val[0] !== val[1]) {
            return err
        }
    }
}

export default formStrategy