import * as shop from "../api/shop"
import * as types from "../constants/ActionTypes"

export const reciveProducts = products => ({
    type: types.RECIVE_PRODUCTS,
    products
})
export const AddToCart = product => ({
    type: types.ADD_TO_CART,
    product
})

//拿到购物商品数据方法
export const getAllProducts = () => dispatch => {
    shop.getAllProducts(products => {
        dispatch(reciveProducts(products))
    })
}

export const setCheckoutStatus = status => ({
    type: types.SET_CHECKOUT_STATUS,
    status
})
//清空购物车方法
export const setCartItems = items => ({
    type: types.SET_ITEMS,
    items
})

export const checkout = (products) => dispatch => {
    //结算业务逻辑
    //1.备份购物车数据
    const savedCartProducts = [...products]
    //2.清空结算状态
    dispatch(setCheckoutStatus(null))
    //3.清空购物车
    dispatch(setCartItems([]))
    //4.请求结算操作
    shop.buyProducts(
        products,
        //5.成功 设置结算状态成功
        () => dispatch(setCheckoutStatus('successful')),
        //失败 设置结算状态失败, 还远购物车数据
        () => {
            dispatch(setCheckoutStatus('failed'))
            dispatch(setCartItems(savedCartProducts))
        }
    )




}
