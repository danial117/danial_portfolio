import Navbar from "./Navbar";
import MainTitle from "./MainTitle";
import { useRef } from "react";
import Services from "./Services";

import Contact from "./Contact";
import IntroDetails from "./MyDetails";
import Footer from "./footer";
const Main=()=>{

    const ServicesRef=useRef(null);
    const ContactsRef=useRef(null);
    const HireRef=useRef(null);
    const IntroRef=useRef(null)

    const scrollToIntro = () => {
      
        if (IntroRef.current) {
         IntroRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  

  
    const scrollToSkills = () => {
      
        if (ServicesRef.current) {
         ServicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToContacts = () => {
      
        if (ContactsRef.current) {
         ContactsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToHire = () => {
      
        if (HireRef.current) {
         HireRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        <Navbar scrollToIntro={scrollToIntro} scrollToHire={scrollToHire} scrollToContacts={scrollToContacts} scrollToSkills={scrollToSkills}/>

        <MainTitle />
          


          <IntroDetails ref={IntroRef} scrollToContacts={scrollToContacts} />  
  
          <Services ref={ServicesRef}  /> 
          <Contact ref={ContactsRef}/>      

           

        

        <Footer ref={HireRef}/>











        
        </>
        

    )
}



export default Main;




