import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import AboutCamp from '../AboutCamp/AboutCamp';
import { Helmet } from 'react-helmet-async';
import DanceStyle from '../../../DanceStyle/DanceStyle';
import WhyChose from '../../../WhyChose/WhyChose';
import PricingTable from '../../../PricingTable/PricingTable';
import Sopnsor from '../../../Sopnsor/Sopnsor';
import StudentReview from '../../../StudentReview/StudentReview';

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
        <div className='px-4'>
            <Helmet>
                <title>Summer Camp | Home</title>
            </Helmet>
            <Slider></Slider>
            <WhyChose></WhyChose>
            <DanceStyle></DanceStyle>
            <PopularClass></PopularClass>
            <Sopnsor></Sopnsor>
            <PopularInstractor></PopularInstractor>
            <PricingTable></PricingTable>
            {/* <StudentReview></StudentReview> */}
        </div>
    );
};

export default Home;