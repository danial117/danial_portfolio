
import MainTitle from "./MainTitle";
import IntroDetails from "./MyDetails";
import Services from "./Services";
import { useRef } from "react";
const Navbar=({scrollToSkills,scrollToIntro,scrollToContacts,scrollToHire})=>{

   

    return(
        
<div>
            <div className="navbar sm:max-md:w-[90%] sm:max-[425px]:w-[80%] sm:max-[425px]:mr-4   my-4 w-[60%] md:max-lg:w-[80%] mx-auto flex justify-between flex-row">
                <div className="relative z-30"> 
                <p className=" font-Abel  text-purple-700 font-bold text-[1.6rem] cursor-pointer">Danial</p>
                </div>
                <div className="flex relative sm:max-[425px]:w-[80%] sm:max-[425px]:ml-2 sm:max-[425px]:mt-2 sm:max-md:w-[70%] z-30 w-[60%] flex-row justify-between">
                    <p className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Home</p>
                    <p onClick={scrollToIntro} className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">About</p>
                    <p onClick={scrollToSkills} className="font-Poppins  sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Services</p>
                    <p onClick={scrollToContacts} className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Contact</p>
                    <p onClick={scrollToHire} className="font-Poppins sm:max-md:text-[10px] mx-2 cursor-pointer text-sm">Hire me</p>
                </div>

            </div>

            <div>

            </div>

               
            
        </div>

    )
}


export default Navbar;