import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 border-4 border-indigo-500'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="" className='w-[500px]  border' />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text4xl sm:text-3xl text-2xl'>Manage Data Centrally</h1>
              <p>Lorem ipsum dolor sit a  met consectetur adipisicing elit. Reprehenderit in dignissimos eius nulla non, tenetur necessitatibus laborum hic eveniet adipisci repellat inventore eos neque amet ipsam minus, veniam iure dolor.</p>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics