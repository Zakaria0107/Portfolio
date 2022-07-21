import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Php from '../assets/php.png';
import Mysql from '../assets/mysql.png';
import Java from '../assets/java.png';
import {FaLongArrowAltRight}from 'react-icons/fa';
const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#212121] text-gray-300'>
        <div className='max-w-[900px] mx-auto px-3 md:px-8 flex flex-col justify-center pt-24'>
            <h2 className='flex items-center text-4xl font-bold'><span className='w-[80px] h-[10px] rounded-full bg-[#7209b7] mr-4'></span>Skills</h2>
            <div className='text-2xl font-bold mt-6 mb-4'>
              <p>To build projects I use many thechnologie :</p>
            </div>
            <h4 className='flex items-center text-xl'><FaLongArrowAltRight className='mr-4' /> For the frontend I use : </h4>
            <div className='grid grid-cols-3 gap-6 my-8'>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={HTML} className="w-[50px] sm:w-[80px]"/>
                    <p className='text-lg font-semibold'>HTML</p>
                </div>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={CSS} className="w-[50px] sm:w-[80px]"/>
                    <p className='text-lg font-semibold'>CSS</p>
                </div>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={JavaScript} className="w-[50px] sm:w-[80px]"/>
                    <p className='text-lg font-semibold'>JavaScript</p>
                </div>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={Tailwind} className="w-[50px] sm:w-[80px]"/>
                    <p className='text-lg font-semibold'>Tailwind</p>
                </div>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={ReactImg} className="w-[50px] sm:w-[80px]" />
                    <p className='text-lg font-semibold'>React</p>
                </div>
            </div>
            <h4 className='flex items-center text-xl'><FaLongArrowAltRight className='mr-4' /> For the backend I use : </h4>
            <div className='grid grid-cols-3 gap-6 my-8'>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={Php} className="w-[50px] sm:w-[80px]"/>
                    <p className='text-lg font-semibold'>PHP</p>
                </div>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={Mysql} className="w-[50px] sm:w-[80px]"/>
                    <p className='text-lg font-semibold'>Mysql</p>
                </div>
            </div>
            <h4 className='flex items-center text-xl'><FaLongArrowAltRight className='mr-4' /> Others: </h4>
            <div className='grid grid-cols-3 gap-6 my-8'>
                <div className='flex items-center justify-center flex-col space-y-4'>
                    <img src={Java} className="w-[50px] sm:w-[80px]"/>
                    <p className='text-lg font-semibold'>JAVA</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;