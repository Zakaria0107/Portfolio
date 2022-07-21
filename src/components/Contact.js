import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full py-[30vh] bg-[#212121] text-gray-300'>
        <div className='max-w-[900px] mx-auto px-3 md:px-8 flex flex-col justify-center  h-full'>
            <h2 className='flex items-center text-4xl font-bold'><span className='w-[80px] h-[10px] rounded-full bg-[#7209b7] mr-4'></span>Contact</h2>
            <form action='' method='' className='flex flex-col mt-6'>
                <input type="text" name="name" className='bg-transparent outline-none p-3  border-b-2 border-b-gray-300 mb-6' placeholder='Name' />
                <input type="email" name="email" className='bg-transparent outline-none p-3  border-b-2 border-b-gray-300 mb-6' placeholder='Email'/>
                <textarea name="subject" rows="8" className='bg-transparent outline-none p-3  border-b-2 border-b-gray-300 mb-6' placeholder='Subject'></textarea>
                <input type="submit" name="submit"  className='text-white text-center group border-2 px-6 py-3 my-2 bg-[#7209b7] border-[#7209b7]' />
            </form>
        </div>
    </div>
  )
}

export default Contact