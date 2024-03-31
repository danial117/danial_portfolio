import { InView } from "react-intersection-observer";
import {motion} from 'framer-motion'
import { forwardRef } from "react";
import Fiveer from "../assets/fiveer";
import Upwork from "../assets/upwork";
import Linkedin from "../assets/Linkedin";
import Facebook from "../assets/facebook";
import { useMediaQuery } from "@material-ui/core";

 const Footer=forwardRef(({},ref)=>{
    const isMobile = useMediaQuery('(max-width:768px)');

    const handleGmailClick = () => {
        const emailAddress = 'danigondal122@gmail.com'; // Replace with the recipient's email address
        const subject = 'Hello Danial'; // Replace with the desired subject
        
    
        // Construct the mailto link
        const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    
        // Open the default email client with the pre-filled email
        window.location.href = mailtoLink;
      };

    const OpenUpwork = () => {
        // Replace the URL with the desired link
        const url = 'https://www.upwork.com/freelancers/~01c3695e7102934612';
        // Open the URL in a new tab
        window.open(url, '_blank');
      };
  

    return(

        <>
     
        <div ref={ref}  className="max-h-[60vh] min-h-[40vh]   lg:max-xl:min-h-[50vh] relative bg-slate-800" >

            <div className="max-h-[40vh] sm:max-md:py-4 sm:max-md:max-h-[30vh] sm:max-[425px]:w-[90%] sm:max-[425px]:mx-auto min-h-[30vh] bg-slate-800 relative -top-16 border-2 border-white w-[70%] sm:max-md:w-[80%] gap-2 mx-auto py-8 flex flex-col items-center ">
                <p className="font-Lexend sm:max-md:text-[12px] text-white text-xl">Have any Projects in mind ? Just drop a line to</p>
                <p onClick={handleGmailClick} className="font-Poppins cursor-pointer sm:max-md:text-sm sm:max-[425px]:text-xs text-blue-400">danigondal121@gmail.com</p>
                <p className="font-Lexend sm:max-md:text-sm text-white text-xl">or</p>
                <button onClick={OpenUpwork} className="cursor-pointer px-4 py-2 font-Poppins sm:max-[425px]:text-sm text-white bg-emerald-500">Hire me now</button>

            </div>


            <motion.div initial={{left:!isMobile ?'-70%' : '-100%' }} whileInView={{left:0,transition:{duration:1.5, ease:'linear'}}} className="w-[70%] sm:max-md:w-[100%]  py-4 bottom-0 bg-black  absolute">
                <div className="flex text-white sm:max-md:gap-4 sm:max-[425px]:ml-0 sm:max-[425px]:px-2   sm:max-[425px]:gap-2 gap-8 px-6 flex-row">
                    <div > 
                        <p className="text-xs sm:max-md:text-[8px]  sm:max-[425px]:text-[7px]  md:max-lg:text-[10px]">Email:</p>
                        <p className="text-xs sm:max-md:text-[8px] sm:max-[425px]:text-[7px]  md:max-lg:text-[10px]">danigondal122@gmail.com</p>

                    </div>

                    <div >
                        <p className="text-xs sm:max-md:text-[8px]  sm:max-[425px]:text-[7px] md:max-lg:text-[10px]">Phone:</p>
                        <p className="text-xs sm:max-md:text-[8px]  sm:max-[425px]:text-[7px]  md:max-lg:text-[10px]">+92 308 7220692</p>

                    </div>

                    <div >
                        <p className="text-xs sm:max-md:text-[8px]  sm:max-[425px]:text-[7px]  md:max-lg:text-[10px]">Residence:</p>
                        <p className="text-xs sm:max-md:text-[8px]  sm:max-[425px]:text-[7px]  md:max-lg:text-[10px]">Model Town,Islamabad</p>

                    </div>

                    <div className="flex w-[20%] ml-auto flex-row">
                        <Fiveer />
                        <Facebook/>
                        <Upwork />
                        <Linkedin />
                    </div>

                </div>

            </motion.div>
         
          
        

        </div>
       
  
         
        
        </>
    )
 })




export default Footer;




