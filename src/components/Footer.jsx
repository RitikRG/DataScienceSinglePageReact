import React from 'react'





const footerStyle = {
    container: `max-w-[1000px] mx-auto text-[#808080] px-3 py-10 grid md:grid-cols-3 space-y-6 md:space-y-0`,
    linksconatiner1: `flex justify-around `,
    linksconatiner2: `flex justify-around md:col-start-2 `,
    links: `space-y-2`,
    newsletter: `p-3 space-y-3 w-[90%] mx-auto md:col-start-3`,
    newsletterheading: `text-xl font-bold`,
    newsletteremailcontainer: `flex md:flex-col lg:flex-row space-x-3 md:space-x-0 lg:space-x-3 md:space-y-3 lg:space-y-0 justify-between`,
    newsletteremailinput: `rounded-md px-3 w-[80%] md:w-full lg:w-[80%]  mx-auto py-2`,
    newsletterbtn: `bg-[#6948FF] text-slate-50 px-3 py-2 rounded-md hover:shadow-lg hover:shadow-[#6948FF]/40 hover:scale-110 duration-300`,


}




const Footer = () => {
    return (
        <div>
            <div className={footerStyle.container}>
                <div className={footerStyle.linksconatiner1}>
                    <div className='w-[40%]'>
                        <ul className={footerStyle.links}>
                            <li className='font-bold'>Solutions</li>
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>
                    <div className='w-[40%]'>
                        <ul className={footerStyle.links}>
                            <li className='font-bold'>Support</li>
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>API Status</li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyle.linksconatiner2}>
                    <div className='w-[40%]'>
                        <ul className={footerStyle.links}>
                            <li className='font-bold'>Solutions</li>
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>
                    <div className='w-[40%]'>
                        <ul className={footerStyle.links}>
                            <li className='font-bold'>Support</li>
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>API Status</li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyle.newsletter}>
                    <p className={footerStyle.newsletterheading}>Subscribe to our Newsletter</p>
                    <p className={footerStyle.newslettertext}>Stay updated with the latest news, updates and offers</p>
                    <div className={footerStyle.newsletteremailcontainer}>
                        <input type="email" placeholder='Your Email' className={footerStyle.newsletteremailinput} />
                        <button className={footerStyle.newsletterbtn}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
