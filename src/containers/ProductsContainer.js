import { connect } from 'react-redux'
import Products from '../components/Products'
import { getAllProducts, AddToCart } from '../actions/index'

const mapStateToProps = state => {
    return {
        products: state.products.all
    }
}

// const mapDispatchToProps = dispath => {
//     return {
//         getAllProducts() {
//             dispath(getAllProducts())
//             //发起请求
//             //拿到数据 ,调用dispatch
//             // dispath({
//             //     type: 'RECIVE_PRODUCTS',
//             //     products: ['a', 'b', 'c']
//             // })
//         }
//     }
// }
const mapDispatchToProps = {
    getAllProducts,
    AddToCart
}


const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);

export default ProductsContainer