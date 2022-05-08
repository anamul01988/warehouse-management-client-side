import React from 'react';
import Footer from '../../common/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer';
import Subscription from '../../components/Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <SpecialOffer/>
            <Subscription/>
    
        </div>
    );
};

export default Home;