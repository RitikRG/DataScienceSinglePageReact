import React from 'react'
import { FaDatabase, FaAccusoft } from 'react-icons/fa'
import {GiMoebiusTriangle} from 'react-icons/gi'


const testimonialStyles = {
    container: `max-w-[1000px] mx-auto py-6 px-3 grid space-y-6 md:space-y-0 md:grid-cols-2 md:space-x-6 `,
    accusofttestimonial: `text-slate-50 rounded-lg py-16 px-3 bg-gradient-to-br from-indigo-800 to-purple-500 bg-cover flex flex-col space-y-2 shadow-lg md:hover:scale-125 duration-200 z-10 opacity-1`,
    stackxtestimonial: `text-slate-50 rounded-lg py-16 px-3 bg-gradient-to-bl from-purple-800 to-indigo-500 bg-cover flex flex-col space-y-2 md:col-start-2 shadow-lg md:hover:scale-125 duration-200 z-10 opacity-1`,
    bganimation2: `hidden md:flex absolute left-[5%]  animate-spin-slow mt-[200px] text-[#6948FF] filter blur-md`,
    bganimation3: `hidden md:flex absolute right-[5%]  animate-spin-slow -mt-[80px] text-[#6948FF] filter blur-md`,
}



const Testimonials = () => {
    return (
        <div className=' bg-slate-50'>
                <div className={testimonialStyles.bganimation2}><GiMoebiusTriangle size={200}/> </div>
                <div className={testimonialStyles.bganimation3}><GiMoebiusTriangle size={200}/>  </div>
            <div className={testimonialStyles.container}>
                <div className={testimonialStyles.accusofttestimonial}>
                    <p className='flex items-center'><FaAccusoft /> <span className='ml-2'> Accusoft</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    <p>Mr. Poonam Gupta</p>
                    <p>2020, CEO</p>
                </div>

                <div className={testimonialStyles.stackxtestimonial}>
                    <p className='flex items-center'><FaDatabase /> <span className='ml-2'> Stack</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, perferendis?</p>
                    <p>Mr. Ritik Gupta</p>
                    <p>2020, CEO</p>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
