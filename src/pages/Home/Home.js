import React from 'react';
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