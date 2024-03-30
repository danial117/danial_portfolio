

import Smile from '../svg/smile';
import {motion} from 'framer-motion'
import { InView } from 'react-intersection-observer';
import Eyes from '../svg/eyes';
import { useState,useRef,useEffect,forwardRef } from 'react';


const Services=forwardRef(({ }, ref1) =>{

    

    

   

   

   

 






    return(
    <>
    <div ref={ref1} className='relative'>
        <div className='w-[80%] sm:max-md:hidden md:max-lg:w-[90%] mx-auto grid relative top-28 md:max-lg:top-32 z-10 grid-cols-3'>
            <div className='w-[85%] flex flex-col justify-between bg-white shadow-md shadow-purple-800 max-h-[40vh] min-h-[30vh]  md:max-lg:h-[30vh] p-4'>
                <p className='font-Lexend font-bold  md:max-lg:text-md  text-lg'>Full Stack Development</p>
                <p className='text-Livvic text-gray-700 md:max-lg:text-xs  text-sm my-2'>We will establish a full stack web development for you. Our package is Javascript, which will be best suited for your job.</p>
                <p className='mt-[10%] font-Lexend font-bold text-sm'>12 Projects Completed</p>
                 </div>
            <div className='w-[85%] flex flex-col justify-between bg-white shadow-md shadow-purple-800  min-h-[30vh] md:max-lg:h-[30vh] max-h-[40vh] p-4'>
                <p className='font-Lexend font-bold  md:max-lg:text-md text-lg'>MERN Stack Developer</p>
                <p className='text-Livvic text-gray-700 md:max-lg:text-xs  text-sm my-2'>I provide comprehensive MERN stack development services to help you succeed in the digital age</p>
                <p className='mt-[10%] font-Lexend font-bold text-sm'>7 Projects Completed</p>
                 </div>
            <div className='w-[85%] flex flex-col justify-between bg-white shadow-md shadow-purple-800 min-h-[30vh]  md:max-lg:h-[30vh] max-h-[40vh] p-4'>
                <p className='font-Lexend font-bold md:max-lg:text-md  text-lg'>Best UI/UX Designs</p>
                <p className='text-Livvic text-gray-700  md:max-lg:text-xs text-sm my-2'>I specialize in creating designs that not only look great but also provide seamless interactions for your audience.</p>
                <p className='mt-[10%] font-Lexend font-bold text-sm'>25 Projects Completed</p>
                 </div>
        </div>
    <div className="w-full relative pt-[20%] md:max-lg:min-h-[140vh] min-h-[170vh] lg:max-xl:min-h-[200vh] max-h-[250vh] z-4 bg-cover bg-center" style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(${require('../assets/bg1.png')})`}}>
    <div className='p-8 w-[80%] mx-auto grid grid-cols-2'>
        <div >
            <div className='h-[20vh]'>
    <motion.p initial={{x:-150,opacity:0}} whileInView={{x:0,opacity:1, transition: { duration: 0.6 }}} className='text-white sm:max-md:text-xs font-Lexend text-sm my-2'>
       PORTFOLIO
    </motion.p>
    <motion.p initial={{x:-150,opacity:0}} whileInView={{x:0,opacity:1, transition: { duration: 0.6 }}} className='text-white sm:max-md:text-sm font-Poppins text-[1.5rem] '>
        All Creative Works,<span className='block'> Selected Projects </span>
    </motion.p>
   < motion.p initial={{x:-150,opacity:0}} whileInView={{x:0,opacity:1, transition: { duration: 0.6 }}} className='text-white sm:max-md:w-[80%] sm:max-md:text-[7px] font-Livvic my-2 md:max-lg:w-[70%] text-[12px] w-[50%]'>
        I can create a full stack web application for you with the best UI/UX possible.
    </motion.p>
    </div>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:1}}} style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(${require('../assets/services1.png')})`}} className='w-[350px] sm:max-md:w-[175px] sm:max-md:h-[250px] md:max-lg:w-[250px] md:max-lg:h-[350px] bg-cover bg-center mt-[15%] sm:max-md:mt-[55%] h-[400px]'></motion.div>
    </div>

    <div className='w-[50%] sm:max-md:flex sm:max-md:flex-col gap-24 mx-auto'>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:1}}} style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(${require('../assets/services5.png')})`}} className='w-[350px] sm:max-md:w-[175px] sm:max-md:h-[250px]  md:max-lg:w-[250px] md:max-lg:h-[350px] bg-cover bg-center mt-[-10%] h-[400px]'></motion.div>
    
    <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:1}}} style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(${require('../assets/services2.png')})`}} className='w-[350px] sm:max-md:w-[175px] sm:max-md:h-[250px] md:max-lg:mt-44 md:max-lg:w-[250px] md:max-lg:h-[350px] bg-cover bg-center mt-[20%] h-[400px]'></motion.div>
   

    </div>

   
    </div>
    
    </div>

    </div>

    
    
   
    
    </>
    )
});



export default Services;

