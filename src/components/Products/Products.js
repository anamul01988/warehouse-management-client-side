

import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();

    // console.log(products)
    return (
        <div className='container'>
            <div className="row my-4">
               {
                   products.slice(0,6).map(product => <Product key={product._id} product={product}/>)
               }
            </div>
        </div>
    );
};

export default Products;