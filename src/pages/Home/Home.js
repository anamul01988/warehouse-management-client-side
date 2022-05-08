import React from 'react';
import Footer from '../../common/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import Subscription from '../../components/Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Subscription/>
    
        </div>
    );
};

export default Home;