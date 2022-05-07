import React from 'react';
import Members from '../../Members/Members';
import Products from '../../Products/Products';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Members></Members>
            <Review></Review>
        </div>
    );
};

export default Home;