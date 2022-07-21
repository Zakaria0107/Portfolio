import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full py-[30vh] bg-[#212121] text-gray-300'>
        <div className='max-w-[900px] mx-auto px-3 md:px-8 flex flex-col justify-center  h-full'>
            <h2 className='flex items-center text-4xl font-bold'><span className='w-[80px] h-[10px] rounded-full bg-[#7209b7] mr-4'></span>About</h2>
            <div className='text-2xl font-bold mt-6 mb-4'>
              <p>Hi. I'm Zakaria, nice to meet you. Please take a look around.</p>
            </div>
            <p>
            I enjoy building things for the web . My interest in web development started back in 2019 so I decided to study computer science and learn programming in general . Now I have a bachelor's degree from the University of Ibno Zohr Agadir .<br/>
            I'm interested in learning new things everyday to improve my skills and challenge myself .
            </p>
            <button className='text-white w-[150px] border-2 px-6 py-3 mt-6 hover:bg-[#7209b7] hover:border-[#7209b7]'>
                More
              </button>
        </div>
    </div>
  );
};

export default About;