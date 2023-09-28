import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <div className='my-8 z-0'>
      <div>
        <Carousel autoPlay interval={3000} infiniteLoop showStatus={false} showThumbs={false}>
          <div className='w-full lg:h-[600px] rounded-xl'>
            <img src="https://i.ibb.co/TYB76tG/lucas-law-8adqe-Hc-ZENI-unsplash.jpg" alt="Image 1" data-aos="zoom-in"/>
          </div>
          {/* <div className='w-full lg:h-[600px]'>
            <img src="https://i.ibb.co/7k1rrwN/andrea-palacios-ahm-Nx-L5-MSLI-unsplash.jpg" alt="Image 3" />
          </div> */}
          <div className='w-full lg:h-[600px]'>
            <img src="https://i.ibb.co/C8SRbmr/rainier-ridao-GRDp-Pp-Kczd-Y-unsplash.jpg" alt="Image 3" />
          </div>
          <div className='w-full lg:h-[600px]'>
            <img src="https://i.ibb.co/9Wq21Zj/miguel-angel-hernandez-Nwc-Z3-a-Evw-unsplash.jpg" alt="Image 2" />
          </div>
          <div className='w-full lg:h-[600px]'>
            <img src="https://i.ibb.co/FDpJvHX/danielle-cerullo-3ck-WUna-Cxzc-unsplash.jpg" alt="Image 2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;