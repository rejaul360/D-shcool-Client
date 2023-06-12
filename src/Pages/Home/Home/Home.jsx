import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import AboutCamp from '../AboutCamp/AboutCamp';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const prefersDarkMode = localStorage.getItem('dark-mode');
      setIsDarkMode(prefersDarkMode === 'true');
    }, []);
  
    useEffect(() => {
      localStorage.setItem('dark-mode', isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]);
  
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };
    return (
        <div >
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