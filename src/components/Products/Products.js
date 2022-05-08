

import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products] = useProducts();

    // console.log(products)
    return (
        <div className='container'>
            <div className="products-content">
                <h2 className='products-title'>New Arrivals</h2>
                <p>Browse the collection of our prodcuts and top interesting products. Definitely find what you are looking for.</p>
            </div>
            <div className="row my-4">
               {
                   products.slice(0,6).map(product => <Product key={product._id} product={product}/>)
               }
            </div>
        </div>
    );
};

export default Products;