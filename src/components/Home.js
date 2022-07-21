import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#212121]'>
      {/* Container */}
      <div className='max-w-[900px] mx-auto px-3 md:px-8 flex flex-col justify-center  py-[30vh]'>
        <p className='text-[#7209b7]'>Hi, my name is</p>
        <h1 className='text-4xl md:text-7xl font-bold text-[#9248d4]'>
          Zakaria Bijaddigune
        </h1>
        <h2 className='text-4xl md:text-7xl font-bold text-[#ba8ae3]'>
          I'm a Web Developer.
        </h2>
        <p className='text-white py-4 max-w-[700px]'>
        My first priority is to satisfy my clients, I will ensure your website will be good looking, user friendly and fully responsive. So feel free to contact me .
        </p>
        <div>
          <Link to='works' smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7209b7] hover:border-[#7209b7]'>
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;