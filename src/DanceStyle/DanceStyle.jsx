import React from 'react';

const DanceStyle = () => {
    return (
        <div class="">
            <h1 class="text-4xl text-white text-center py-10 mb-10 ">Choose Your Dance Style</h1>

            {/* Contemporary Dance Section  */}
            <div class="flex flex-col md:flex-row w-full">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 overflow-hidden" data-aos="fade-right">
                    <img className='hover:scale-125 duration-300' src="https://i.ibb.co/KG0Lr1F/contemporary-771x528.jpg"  alt="" />
                </div>
                <div class="w-full md:w-1/2 flex items-center" data-aos="fade-left">
                    <div class="md:ml-10 p-4 text-white">
                        <h1 class="text-4xl md:mb-10">Contemporary Dance</h1>
                        <p class="text-xl">We can especially recommend this dance school template to dancers and true artists. Customization capabilities of this AMP dancing template are unmatched in terms of both depth and intuitiveness.</p>
                    </div>
                </div>
            </div>

            {/* Ballet Section  */}
            <div class="flex flex-col md:flex-row w-full">
                <div class="w-full md:w-1/2 flex items-center">
                    <div class="md:ml-10 p-4 text-white" data-aos="fade-right">
                        <h1 class="text-4xl md:mb-10">Ballet</h1>
                        <p class="text-xl">It is an aesthetically clean and minimalist, highly professional and graphically refined and polished, very well structured and intuitively navigable, user and developer friendly, lightweight and extremely modern, search engine optimized and notoriously bold and communicative, visually stimulating responsive multi-concept dance studio template.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 mb-4 md:mb-0 overflow-hidden" data-aos="fade-left">
                    <img className='hover:scale-125 duration-300' src="https://i.ibb.co/Y2Z12kR/ballet-771x512.jpg"  alt=""  />
                </div>
            </div>

            {/* Pole Dance Section  */}
            <div class="flex flex-col md:flex-row w-full">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 overflow-hidden" data-aos="fade-right">
                    <img className='hover:scale-125 duration-300' src="https://i.ibb.co/Nxyx2H2/attractive-male-model-performing-pole-dance-23-2148412015.jpg"  alt=""  />
                </div>
                <div class="w-full md:w-1/2 flex items-center">
                    <div class="md:ml-10 p-4 text-white" data-aos="fade-left">
                        <h1 class="text-4xl md:mb-10">Pole Dance</h1>
                        <p class="text-xl">All of us know that the Internet is a great place to spread information. If you want to improve your dancing school business, then it is important for you to take a look at this awesome dance studio template.</p>
                    </div>
                </div>
            </div>

            {/* Hip-Hop Section  */}
            <div class="flex flex-col md:flex-row w-full">
                <div class="w-full md:w-1/2 flex items-center" >
                    <div class="md:ml-10 p-4 text-white" data-aos="fade-right">
                        <h1 class="text-4xl md:mb-10">Hip-Hop</h1>
                        <p class="text-xl">AMP dancing template is simple for customization and usage. This theme uses modern AMP technology. The dancing template is designed to satisfy the latest website requirements. It helps you to effectively manage the website speed on small screen mobile devices.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 mb-4 md:mb-0 overflow-hidden" data-aos="fade-left">
                    <img  className='hover:scale-125 duration-300' src="https://i.ibb.co/GM4SgBp/hip-hop-771x514.jpg"  alt=""  />
                </div>
            </div>
        </div>

    );
};

export default DanceStyle;