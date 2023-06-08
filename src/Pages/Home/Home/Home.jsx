import React from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import AboutCamp from '../AboutCamp/AboutCamp';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularClass></PopularClass>
           <PopularInstractor></PopularInstractor>
           <AboutCamp></AboutCamp>
        </div>
    );
};

export default Home;