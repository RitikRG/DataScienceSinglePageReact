import React from 'react'



const pricingStyle = {
    container: `bg-slate-50 px-2 py-6  space-y-6`,
    eyn: `max-w-[1000px] mx-auto shadow-lg grid space-y-6 md:space-x-3 md:grid-cols-2 space-y-2 px-3 py-3 rounded-md`,
    heading: `text-3xl font-semibold`,
    price: `text-3xl font-semibold text-[#6948FF]`,
    text: ` text-[#808080]`,
    txtDiv: `space-y-2 md:col-start-1 md:col-end-2 `,
    btnDiv: `md:col-start-2 md:col-end-3 md:row-start-1 w-full flex justify-around items-center`,
    btn: `px-3 py-2 bg-[#6948FF] rounded-md text-slate-50 hover:shadow-md hover:shadow-[#6948FF]/50 w-[80%] md:h-[50px] md:w-[250px] hover:scale-110 duration-300`,

    ayntk: `max-w-[1000px] mx-auto hidden md:flex flex-col md:space-y-6 lg:space-y-0 lg:flex-row justify-between  py-8 px-4`,
    ayntkheading: `space-y-2 font-semibold lg:w-[40%]`,
    ayntkcontent: `flex justify-around space-x-3`,
    ayntklist: `space-y-3 text-lg text-[#808080]`,
    ayntklistitem: `border-b-2 py-2`, 

}




const Pricing = () => {
    return (
        <div className={pricingStyle.container}>
            {/* eyn = eyerything you need */}
            <div className={pricingStyle.eyn}>
                <div className={pricingStyle.txtDiv}>
                    <p className={pricingStyle.heading}>Everything You Need for</p>
                    <p className={pricingStyle.price}>$99 a month</p>
                    <p className={pricingStyle.text}>Includes everything we offer plus unlimited projects and unlimited users</p>
                </div>
                <div className={pricingStyle.btnDiv}>
                    <button className={pricingStyle.btn}>Get Started</button>
                </div>

            </div>
            {/*ayntk= All you need to know */}
            <div className={pricingStyle.ayntk}>
                <div className={pricingStyle.ayntkheading}>
                    <p className='text-3xl'>Everything you need at <span className='text-[#6948FF]'>one place</span></p> 
                    <p className='text-2xl'>All in one Platform</p>
                    <p className='text-md text-[#808080]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus odit doloribus corrupti enim vel sint laborum voluptatum praesentium tenetur voluptate.</p>
                </div>
                <div className={pricingStyle.ayntkcontent}>
                    <div>
                        <ul className={pricingStyle.ayntklist}>
                            
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={pricingStyle.ayntklist}>
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                            <li className={pricingStyle.ayntklistitem}>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing
