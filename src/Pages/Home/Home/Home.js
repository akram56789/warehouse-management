import React from 'react';
import Members from '../../Members/Members';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Members></Members>
        </div>
    );
};

export default Home;