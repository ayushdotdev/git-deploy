import React from 'react'
import Single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 hover:scale-105'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black'>Start Trials</button>
            </div>

            <div className='shadow-xl bg-gray-100 flex flex-col md:my-0 p-4 my-8 rounded-lg duration-300 hover:scale-105'>
                <img className='w-20 mx-auto mt-[-3rem]  bg-transparent' src={double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-[#00df9a]'>Start Trials</button>
            </div>

            <div className='shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 hover:scale-105'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black'>Start Trials</button>
            </div>

        </div>
    </div>
  )
}

export default Cards