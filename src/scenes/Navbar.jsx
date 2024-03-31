
import { useState } from "react";
import { motion } from "framer-motion"
import Bars from "../assets/bars";
import { useMediaQuery } from "@material-ui/core";
import Cross from "../assets/cross";
const Navbar=({scrollToSkills,scrollToIntro,scrollToContacts,scrollToHire})=>{

    const isMobile = useMediaQuery('(max-width:768px)');
    const [toggle,setToggle] =useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }


      const containerVariants={
        initial:{},
        
        animate:{
            
            transition:{
                duration:2,
                staggerChildren:0.3,
               
            }
        }
    }
      
    const childrenVarients={
        initial:{opacity:0},
         animate:{opacity:1,
            transition:{duration:0.5}
        }
    }

  
    return(
        <>
        
<div>
    
  
            <div className="navbar sm:max-md:w-[90%] sm:max-[425px]:w-[80%] sm:max-[425px]:mr-4   my-4 w-[60%] md:max-lg:w-[80%] mx-auto flex justify-between flex-row">
                <div className="relative z-30"> 
                <p className=" font-Abel  text-purple-700 font-bold text-[1.6rem] cursor-pointer">Danial</p>
                </div>
                {!isMobile ?
                <div className="flex relative sm:max-[425px]:w-[80%] sm:max-[425px]:ml-2 sm:max-[425px]:mt-2 sm:max-md:w-[70%] z-30 w-[60%] flex-row justify-between">
                   <p className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Home</p>
                    <p onClick={scrollToIntro} className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">About</p>
                    <p onClick={scrollToSkills} className="font-Poppins  sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Services</p>
                    <p onClick={scrollToContacts} className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Contact</p>
                    <p onClick={scrollToHire} className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Hire me</p>
   
                   
                
                </div>
               
                :
               <div onClick={()=>setToggle(!toggle)} className="cursor-pointer">  <Bars /> </div>

}




   



            </div>

            <div>

            </div>

               
            
        </div>
         {
            toggle && isMobile &&
            <div   className="w-full top-0 z-40 absolute  bg-black">
            <motion.div variants={containerVariants} initial='initial' animate='animate' className="flex  w-[100%] mx-auto pt-4 -mb-2  flex-row justify-between">
            <motion.p   variants={childrenVarients}   className="font-Poppins text-white mx-2 cursor-pointer sm:max-md:text-[14px] sm:max-[425px]:text-[0.6rem]">Home</motion.p>
             <motion.p  variants={childrenVarients}  onClick={scrollToSkills} className="font-Poppins text-white mx-2 cursor-pointer sm:max-md:text-[14px] sm:max-[425px]:text-[0.6rem]">About</motion.p>
             <motion.p  variants={childrenVarients}  onClick={ scrollToSkills} className="font-Poppins  text-white mx-2 cursor-pointer sm:max-md:text-[14px] sm:max-[425px]:text-[0.6rem]">Services</motion.p>
             <motion.p  variants={childrenVarients}  onClick={scrollToContacts} className="font-Poppins text-white mx-2 cursor-pointer sm:max-md:text-[14px] sm:max-[425px]:text-[0.6rem]">Contact</motion.p>
             <motion.p  variants={childrenVarients}  onClick={scrollToHire} className="font-Poppins text-white mx-2 cursor-pointer sm:max-md:text-[14px] sm:max-[425px]:text-[0.6rem]">Hire me</motion.p>
           <motion.div  variants={childrenVarients}  onClick={()=> setToggle(!toggle)} className="relative cursor-pointer sm:max-md:bottom-1 bottom-2"> <Cross /> </motion.div>
            
         
         </motion.div>
         </div>

        
         }
         </>

    )
}


export default Navbar;