import React from 'react';
import './AboutCamp.css'
import summerCampImg from '../../../assets/summercamp/summer-camp-2048px-1199232997-2x1-1.webp'

const AboutCamp = () => {
    return (
            <>
              <div>
                <h1 className='text-center font-bold text-3xl'>About Summer</h1>
                <div className="divider text-3xl font-bold">Camp</div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start py-10">
        <div className="w-full md:w-1/2">
          <img
            src={summerCampImg}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <article className="text-lg">
            <h2 className="text-xl font-bold mb-4">About Summer Camp 2022 in December</h2>
            <p>
            One magical summer evening at camp, as the sun painted the sky in hues of gold, a chorus of laughter filled the air. The campfire crackled and danced, casting flickering shadows on the faces of eager campers. Around the flames, new friendships were forged, and old bonds grew stronger. Amidst the joyful chaos, a young camper stood up, her voice trembling with nervous excitement. She sang a heartfelt song, her pure, angelic voice captivating everyone present. In that enchanting moment.
            </p>
          </article>
        </div>
      </div>
            </>
        // <>
        //     <div>
        //         <h1 className='text-center font-bold text-3xl'>About Summer</h1>
        //         <div className="divider text-3xl font-bold">Camp</div>
        //     </div>
        //     <div className='featured-item bg-fixed text-white pt-8 my-20'>
        //         <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 p-20 w-full">
        //             <div className=''>
        //                 <img src={summerCampImg} alt="" />
        //             </div>
        //             <div className="md:ml-10 w-1/3 sm:w-1/4">
        //                 <p className='font-semibold'>jan 20, 2022</p>
        //                 <p className='font-semibold uppercase'>Some Special Moment</p>
        //                 <div className='w-full h-auto'>
        //                 <p className='font-semibold w-full '>One magical summer evening at camp, as the sun painted the sky in hues of gold, a chorus of laughter filled the air. The campfire crackled and danced, casting flickering shadows on the faces of eager campers. Around the flames, new friendships were forged, and old bonds grew stronger. Amidst the joyful chaos, a young camper stood up, her voice trembling with nervous excitement. She sang a heartfelt song, her pure, angelic voice captivating everyone present. In that enchanting moment.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

export default AboutCamp;