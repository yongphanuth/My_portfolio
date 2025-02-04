import React from 'react'
import HeroImage from '/public/img/Hero1.jpg'
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div name ="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
        <div className=' max-w-screen-lg mx-auto flex-col flex items-center justify-center h-full px-4 md:flex-row'>
            <div className='  flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl text-white'>I'm a Web Developer</h2>
                <p className='text-gray-300 max-w-md py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio quisquam magni, nam consequatur fugit, quo alias laborum dolorum fuga natus, 
                    modi necessitatibus possimus saepe veniam!
                </p>
                <div>
                    <button className=' group flex items-center my-2 rounded-md text-white px-6 py-3 w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <RiArrowRightSLine className='ml-1' size={25}/>

                    </span>
                    </button>
                </div>

            </div>
            <div>
                <img src={HeroImage} alt="my-profile" className=' rounded-2xl mx-auto w-2/3 md:w-2/3 scale-60' />
            </div>
        </div>
    </div>
  )
}

export default Home