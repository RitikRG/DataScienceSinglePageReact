import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'

const bodyStyle ={
    body: `bg-[#333] `,
}
const Home = () => {

    return (
        <body className={bodyStyle.body}>
            <div>
                <Navbar />
                <Hero/>
                <Pricing/>
                <Testimonials/>
                <Faq/>
                <Contact/>
                <Footer/>
            </div>
        </body>

    )
}

export default Home
