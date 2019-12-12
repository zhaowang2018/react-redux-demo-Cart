import * as types from "../constants/ActionTypes"


const initialState = {
    items: [],
    //结算状态 null 'successful' 'failed'
    checkoutStatus: null
}

const items = (state = initialState.items, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            //判断购物车中是商品是否已存在
            //如果以存在 则让购物车商品数量 +1 
            //如果不存在 则添加新商品到购物车
            const productId = action.product.id
            const product = state.find(item => item.id === productId)
            if (product) {
                product.quantity++
                return [...state]
            } else {

                return [...state, {
                    id: productId,
                    quantity: 1
                }]
            }
        case types.SET_ITEMS:
            return action.items
        default:
            return state
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CHECKOUT_STATUS:
            return {
                ...state,
                checkoutStatus: action.status
            }
        default:
            return {
                items: items(state.items, action),
                checkoutStatus: state.checkoutStatus
            }
    }

}