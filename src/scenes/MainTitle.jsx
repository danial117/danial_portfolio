import {motion,AnimatePresence } from 'framer-motion'
import { useState,useEffect } from 'react';
import Spaceship from '../svg/Spacehip';
import Square from '../svg/square';
import './style.css'
import Circle from '../svg/circle';
import { useMediaQuery } from '@material-ui/core';





 

const MainTitle=()=>{
    const [shiped,setShiped]=useState(false);
    const isMobile = useMediaQuery('(max-width:320px)');


    useEffect(()=>{
        setTimeout(()=>{
            
            setShiped(!shiped)

        },7000)

    },[shiped])
     
    const containerVariants={
        
        animate:{
            
            transition:{
                duration:2,
                times:[0,0.5,1],
                delayChildren:2,
                staggerChildren:0.5,
               
            }
        }
    }

    const letterVariants={
     
        
        animate:{
            y: [0,-40,-120],
            x: [0,40,120],
            opacity:[1,0.5,0],
            scale:[1,0.50,0.25],
            transition:{
                duration:1,
                times:[0,0.5,1],
                ease:'linear',
                
                
    
            }
        }
      
    }

    const squareVarient={

        animate:{
            rotate:[]
        }
    }

    const shippedVariants={
     
        
        animate:{
           
            opacity:[0,0.5,1],
            scale:[1,2.5,1],
            

            transition:{
                duration:1.5,
                times:[0,0.5,1],
                ease:'linear',
                
                
    
            }
        }
      
    }

    





    return(
        < >
        <div className='w-full max-h-[100vh] min-h-[80vh]'>

        <motion.div 
        initial={{position: 'absolute', top: '0%', left: '-10%',}}
        style={{zIndex:'20',overflow:'hidden'}}
        animate={{
           
            left: ['-10%', '40%' , !isMobile ?'70%':'60%'],
           
        }}

      

        transition={{
            duration:7,
            times:[0,0.9,1],
            ease:'linear',
            repeat:Infinity
            
        }}

       
        
        >
            <Spaceship />
           

         
         </motion.div>
        <div  className="MainTitle  w-full">
        
           
          <div className="flex flex-row relative ">
            <div className="w-[70%] sm:max-md:mt-[30%] mx-auto mt-[10%] md:max-lg:mt-[20%]">
                <p className="text-[1.3rem] font-Lexend text-purple-800">Hello</p>
                <p className="text-[2.5rem] inline -my-[5px] font-Poppins">I'm  </p>

               {shiped && <motion.div variants={containerVariants} initial="initial" animate="animate" style={{display:'inline-block'}}>
                <AnimatePresence>
      {/* Each letter is wrapped in a motion.span with unique key */}
      {['D', 'a', 'n', 'i', 'a', 'l'].map((letter, index) => (
     
        <motion.span  key={index} variants={!shiped?shippedVariants : letterVariants} className="font-Lexend inline-block  text-[2.5rem] font-bold text-purple-800">
          {letter}
        </motion.span>
      ))}
        </AnimatePresence>
    </motion.div>}

    {!shiped && <motion.div variants={containerVariants} initial="initial" animate="animate" style={{display:'inline-block'}}>
                <AnimatePresence>
      {/* Each letter is wrapped in a motion.span with unique key */}
      {['D', 'a', 'n', 'i', 'a', 'l'].map((letter, index) => (
     
        <motion.span  key={index} variants={!shiped?shippedVariants : letterVariants} className="font-Lexend inline-block  text-[2.5rem] font-bold text-purple-800">
          {letter}
        </motion.span>
      ))}
        </AnimatePresence>
    </motion.div>}

   

                <p className="text-[3rem] sm:max-md:text-[1.5rem] font-Poppins z-10 relative">Full Stack Developer</p>
                <motion.div  style={{position:'absolute', width:'250px',height:'250px', left:'10%', top:'60%',zIndex:5}}  >
            <Square />
            </motion.div>

            <div className='absolute z-200 w-[90%] -top-[175%] lg:max-xl:-top-[160%] right-[40%]'>
<Circle />
</div>

            </div>
           
          
            
            
           

             </div>
            
        </div>
       
        
        
       
       
        </div>
        </>
    )
}


export default MainTitle;













