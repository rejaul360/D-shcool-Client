import React from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import AboutCamp from '../AboutCamp/AboutCamp';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Summer Camp | Home</title>
            </Helmet>
           <Slider></Slider>
           <PopularClass></PopularClass>
           <PopularInstractor></PopularInstractor>
           <AboutCamp></AboutCamp>
        </div>
    );
};

export default Home;