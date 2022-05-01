
import useProducts from '../../Hooks/useProducts/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();

    // console.log(products)
    return (
        <div className='container'>
             <h3>{products.length}</h3>
            <div className="row">
               {
                   products.slice(0,6).map(product => <Product key={product.id} product={product}/>)
               }
            </div>
        </div>
    );
};

export default Products;