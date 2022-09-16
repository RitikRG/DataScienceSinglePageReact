import React, {useState} from 'react';
import {Link, link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa';


const NavStyle ={
    navPcContainer : `text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 `,
    navPcLogo : `w-[60px]`,
    navPcLinks : `p-4 text-[#fff] hover:scale-125 duration-300 hover:text-[#6948FF]`,
    logoAnimation: `animate-bounce`,
    pcUl: `sm:flex hidden`,
    navMobiContainer : `fixed left-0 top-0 border-r border-r-gray-900 w-full h-full bg-[#333] ease-in-out duration-500  sm:hidden`,
    navMobiLogo: `w-[60px] mt-6 ml-3`,
    mobiToggleIn: `absolute right-[13px] top-[36px] `
}
const Navbar = () => {
    const [nav, setNav]=useState(true);

    const handleNav = ()=>{
        setNav(!nav)
    }
    return (
        <div className={NavStyle.navPcContainer}>
            <Link to='/'> <div className={NavStyle.navPcLogo}><img src={Logo} alt="Logo" className={NavStyle.logoAnimation}/></div></Link>
            <ul className={NavStyle.pcUl}>
                <li className={NavStyle.navPcLinks}><Link to='/'>Home</Link></li>
                <li className={NavStyle.navPcLinks}><Link to='/pricingpage'>Pricing</Link></li>
                <li className={NavStyle.navPcLinks}><Link to='/faqpage'>FAQ</Link></li>
                <li className={NavStyle.navPcLinks}><Link to='/contactpage'>Contact</Link></li>
            </ul>
            <div onClick={handleNav} className='sm:hidden'>
                {!nav? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25} />}
            </div>
            <div className={!nav?NavStyle.navMobiContainer:'fixed left-[-100%]  sm:hidden'}>
            <div onClick={handleNav} className={NavStyle.mobiToggleIn}>
                {!nav? <AiOutlineClose size={35}/>:<AiOutlineMenu size={25} />}
            </div>
            <Link to='/'><div className={NavStyle.navMobiLogo}><img src={Logo} alt="Logo" className={NavStyle.logoAnimation}/></div></Link>

                <ul className='pt-[3rem] text-center px-14'>
                    <li className='p-4 text-[#fff] text-2xl font-semibold'><Link to='/'>Home</Link></li>
                    <li className='p-4 text-[#fff] text-2xl font-semibold'><Link to='/pricingpage'>Pricing</Link></li>
                    <li className='p-4 text-[#fff] text-2xl font-semibold'><Link to='/faqpage'>FAQs</Link></li>
                    <li className='p-4 text-[#fff] text-2xl font-semibold'><Link to='/contactpage'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

