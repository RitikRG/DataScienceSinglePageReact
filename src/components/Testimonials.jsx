import React from 'react'
import { FaDatabase, FaAccusoft } from 'react-icons/fa'


const testimonialStyles = {
    container: `max-w-[1000px] mx-auto py-6 px-3 grid space-y-6 md:space-y-0 md:grid-cols-2 md:space-x-6 `,
    accusofttestimonial: `text-slate-50 rounded-lg py-16 px-3 bg-gradient-to-br from-indigo-800 to-purple-500 bg-cover flex flex-col space-y-2 shadow-lg`,
    stackxtestimonial: `text-slate-50 rounded-lg py-16 px-3 bg-gradient-to-bl from-purple-800 to-indigo-500 bg-cover flex flex-col space-y-2 md:col-start-2 shadow-lg `,
}



const Testimonials = () => {
    return (
        <div className=' bg-slate-50'>
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
