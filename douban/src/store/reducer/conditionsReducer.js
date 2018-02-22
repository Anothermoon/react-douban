import {
    TERM_REQUEST,
    TERM_RESPONCE,
    TERM_ERROR,
    TERM_REFRESH,
    TERM_ADD_TAGS,
    TERM_DELETE_TAGS
} from './../actions/conditionsActions'


/**
 * isReq 是否在请求
 * isOverdue 是否过期
 * item 数据集合
 * currentItemLength 本次请求的长度
 * start 请求开始位置
 * count 请求的长度
 * errMsg 错误信息
 * tags 标签
 */
function termList (state = {
    isReq: false,
    isOverdue: true,
    item: [],
    currentItemLength: 0,
    start: 0,
    count: 20,
    errMsg: '',
    tags: [{
        key: '全部形式',
        value: '',
        type: 'form',
    }, {
        key: '全部类型',
        value: '',
        type: 'type',
    }, {
        key: '全部地区',
        value: '',
        type: 'region',
    }],
    tagsStr: ''
}, action) {
    switch(action.type) {
        case TERM_REQUEST:
            return {
                ...state,
                isReq: true
            }
        case TERM_RESPONCE:
            let { items, start } = action.res
            return {
                ...state,
                isReq: false,
                isOverdue: false,
                start,
                errMsg: '',
                currentItemLength: items.length,
                item: start == 0 ? [...items] : [...state.items, ...items]
            }
        case TERM_ERROR:
            let { errMsg } = action.err
            return {
                ...state,
                isReq: false,
                errMsg: errMsg
            }
        case TERM_REFRESH:
            return {
                ...state,
                isOverdue: true
            }
        case TERM_ADD_TAGS:
        case TERM_DELETE_TAGS:
            return {
                ...state,
                tags: changeTags(state.tags, action),
                tagsStr: changeTagsStr(state.tags, action)
            }
        default:
            return state
    }
}

function changeTags (state = [], action) {
    switch(action.type) {
        case TERM_ADD_TAGS:
            let { tag } = action
            // 去除同种类型的
            let newTags = state.filter(item => item.type !== tag.type)
            return [
                ...newTags,
                tag
            ]
        case TERM_DELETE_TAGS:
            let { key } = action
            return state.filter(item => item.key !== key)
        default:
            return state
    }
}

function changeTagsStr (state = '', action) {
    let newTags = []
    switch(action.type) {
        case TERM_ADD_TAGS:   
            let { tag } = action
            newTags = state.filter(item => item.type !== tag.type)
            newTags = [...newTags, tag]
            return tagsArrShiftStr(newTags)
        case TERM_DELETE_TAGS:
            let { key } = action
            newTags = state.filter(item => item.key !== key)
            return tagsArrShiftStr(newTags)
        default:
            return state
    }
}

function tagsArrShiftStr (tagsArr) {
    let tagsStrArr = []
    tagsArr.forEach(item => item.value !== '' && tagsStrArr.push(item.value))
    return tagsStrArr.join(',')
}

export default termList
