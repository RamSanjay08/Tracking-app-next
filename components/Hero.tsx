import React from 'react'
import ImagesHome from '../public/interstellar.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full max-h-screen relative'>
        <Image src={ImagesHome} alt="home" className='w-full max-h-screen object-contain' />
        <div className='w-full h-full absolute top-0 bg-black/30 text-center flex flex-col justify-center items-center  text-green-400 '>
            <h2 className='text-[150px] font-bold'>..Blog Web..</h2>
            <p className='text-2xl font-bold translate-y-2 text-gray-100'>Explore the Innovative Blogs</p>
        </div>
    </div>
  )
}



export default Hero