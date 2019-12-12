
const _products = [
    { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "iPhone 5", "price": 300.01, "inventory": 10 },
    { "id": 3, "title": "iPhone X", "price": 599.01, "inventory": 20 }
]

export const getAllProducts = callback => {
    setTimeout(() => {
        callback(_products)
    }, 100);
}

//模拟结算操作
export const buyProducts = (products, callback, errorCallback) => {
    setTimeout(() => {
        Math.random() > 0.5 ? callback() : errorCallback()
    }, 100);
}