import React from 'react';
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';




const heroStyle = {
    container: ` grid p-6 text-[#fff] md:grid-col-2 md:space-x-2 space-y-14 max-w-[1024px] mx-auto pb-14`,
    heroContent: ` pt-24 md:pt-36`,
    heading: `text-4xl font-semibold tracking-[1px] `,
    heading2: `text-4xl font-semibold tracking-[1px] text-[#6948FF]`,
    text: `pt-4 text-[#808080]`,
    usedBy: `flex justify-between w-[60%] text-[#808080] pt-4`,
    form: `bg-slate-50 rounded-md shadow-lg flex flex-col p-6 text-[#808080] w-full mx-auto max-w-[400px] md:col-start-2`,
    FTGicon: `border-2 w-[30%] flex justify-around items-center py-2 shadow-lg rounded-md`,
    FTGlogin: `flex py-3 text-3xl justify-around`,
    divider: `flex justify-between items-center`,
    inputDiv: `flex flex-col-reverse`,
    input: ` form-control rounded-md p-2 shadow-md  peer  font-semibold `,
    label: `font-semibold absolute -translate-y-6 transition-all peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:-z-10`,
    btn: `px-3 py-2 bg-[#6948FF] rounded-md text-slate-50 hover:shadow-md hover:shadow-[#6948FF]/50`,
    tocdiv: `py-4 px-2`, 
}

const Hero = () => {
    return (
        <div className={heroStyle.container}>
            <div className={heroStyle.heroContent}>
                <h1 className={heroStyle.heading}>Data to enrich your</h1>
                <h1 className={heroStyle.heading2}>online Business</h1>
                <p className={heroStyle.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus harum accusantium adipisci? Tempora quaerat accusantium porro esse numquam odio error.</p>
                <div>
                    <p className='text-[#d3d3d3] pt-4 text-sm'>Used BY</p>
                    <div className={heroStyle.usedBy}>
                        <i className='flex items-center gap-1'><FaDatabase />Stacks</i>
                        <i className='flex items-center gap-1'><FaAsterisk />Star Ai</i>
                        <i className='flex items-center gap-1'><FaAccusoft />Accusoft</i>
                    </div>
                </div>
            </div>
            <div className={heroStyle.form}>
                <p>Sign in with</p>
                <div className={heroStyle.FTGlogin}>
                    <div  className={heroStyle.FTGicon}><Link to='/'><i><FaFacebook /></i></Link></div>
                    <div className={heroStyle.FTGicon}><Link to='/'><i><FaTwitter /></i></Link></div>
                    <div className={heroStyle.FTGicon}><Link to='/'><i><FaGithub /></i></Link>
                    </div>        </div>
                <div className={heroStyle.divider}>
                    <div className='w-[40%]'><hr /></div>
                    <div>Or</div>
                    <div className='w-[40%]'><hr /></div>
                </div>
                <div>
                    <form className='py-4 space-y-8' >
                        <div className={heroStyle.inputDiv}>
                            <input type="text" id="name" name="name" className={heroStyle.input} placeholder=" Name" />
                            <label for="name" className={heroStyle.label} name="name">Name</label>
                        </div>
                        <div className={heroStyle.inputDiv}>
                            <input type="email" id="email" name="email" className={heroStyle.input} placeholder=" Email" />
                            <label for="email" className={heroStyle.label} name="email">Email</label>
                        </div>
                        <div className={heroStyle.inputDiv}>
                            <input type="password" id="password" name="password" className={heroStyle.input} placeholder="Password" />
                            <label for="password" className={heroStyle.label} name="password">Password</label>
                        </div>
                        <div className='flex justify-around'>
                        <button className={heroStyle.btn}>Create your account</button>
                        </div>
                    </form>
                    <hr className='mt-2'/>
                    <div className={heroStyle.tocdiv}>
                        <p>By signing up, you agree to <a className='text-[#6948FF] font-semibold'>our terms</a>, <a className='text-[#6948FF] font-semibold'>Data Privacy</a> and <a className='text-[#6948FF] font-semibold'>Cookies policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
