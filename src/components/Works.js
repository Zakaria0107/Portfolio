import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import audiophile from '../assets/audiophile.mp4';
import invoices from '../assets/invoices.mp4';
import portfolio from '../assets/portfolio.png'
const Works = () => {
  return (
    <div name='works' className='w-full py-[30vh] bg-[#212121] text-gray-300'>
        <div className='max-w-[900px] mx-auto px-3 md:px-8 flex flex-col justify-center  h-full'>
            <h2 className='flex items-center text-4xl font-bold mb-12'><span className='w-[80px] h-[10px] rounded-full bg-[#7209b7] mr-4'></span>Works</h2>
            <div className='grid lg:grid-cols-2 gap-6 '>
              <div>
                <video 
                  src={invoices}
                  type="video/mp4"
                  loop
                  controls = {false}
                  muted
                  autoPlay
                />
                <h3 className='text-xl font-bold mt-3'>Invoices App</h3>
                <p className='my-6'>It's a responsive full-stack  management invoice app  with all CRUD operations . I implement both frontend and backend using html , scss , js, php(with MVC pattern) and mysl .</p>
                <button className='float-right text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7209b7] hover:border-[#7209b7]'>
                Demo 
                <span className='group-hover:ml-2 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
                </button>
              </div>
              <div>
                <video 
                  src={audiophile}
                  type="video/mp4"
                  loop
                  controls = {false}
                  muted
                  autoPlay
                />
                <h3 className='text-xl font-bold mt-3'>Audiophile</h3>
                <p className='my-6'>It's a responsive e-commerce website for speakers , earphones and headphones .
                  I've buy the design from <a href="https://www.frontendmentor.io" target="_blank" className='font-bold underline'>Fronend Mentor</a> and I implement both frontend and backend using html , scss , js, php(with MVC pattern) and mysl .</p>
                <button className='float-right text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7209b7] hover:border-[#7209b7]'>
                Demo 
                <span className='group-hover:ml-2 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
                </button>
              </div>
              <div>
                <img src={portfolio} />
                <h3 className='text-xl font-bold mt-3'>My portfolio</h3>
                <p className='my-6'>To build my website and show my work , I use React and tailwind . And I've inspired from many website to build a nice looking portfolio .</p>
                <a href="/" className='float-right text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7209b7] hover:border-[#7209b7]'>
                Demo 
                <span className='group-hover:ml-2 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Works