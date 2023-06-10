import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className='my-8'>
            <div >
                <Carousel >
                    <div className='w-full lg:h-[600px]'>
                        <img  src="https://mobirise.com/extensions/lightamp/assets/images/2-1300x861.jpg" />
                    </div>
                    <div className='w-full lg:h-[600px]'>
                        <img src="https://mobirise.com/extensions/lightamp/assets/images/5-1300x861.jpg" />

                    </div>
                    <div className='w-full lg:h-[600px]'>
                        <img src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2UlMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />

                    </div>
                    <div className='w-full lg:h-[600px]'>
                        <img src="https://mobirise.com/extensions/lightamp/assets/images/2-1300x861.jpg" />
                    </div>
                    <div className='w-full lg:h-[600px]'>
                        <img src="https://mobirise.com/extensions/lightamp/assets/images/5-1300x861.jpg" />

                    </div>
                    <div className='w-full lg:h-[600px]'>
                        <img src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2UlMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />

                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;