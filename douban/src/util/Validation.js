import formStrategy from './strategy'

// 验证类
class Validation {
    constructor () {
        // 验证规则的集合
        this.rule = []
    }

    /**
     * 添加验证规则
     * @param {String} value 验证的内容 
     * @param {Array} rule 验证内容的规则 
     */
    addRule (value, rule) {
        rule.forEach(ruleItem => {
            this.rule.push(() => {
                let { strategy, errMsg } = ruleItem
                return formStrategy[strategy](value, errMsg)
            })
        })
    }

    /**
     * 开始验证 
     */
    startValidation () {
        for (let i = 0; i < this.rule.length; i++) {
            let msg = this.rule[i]()
            if (msg) {
                return msg
            }
        }
    }
}

export default Validation
