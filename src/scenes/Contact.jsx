
import { forwardRef,useState } from "react";
import {motion} from 'framer-motion';
import Smile from "../svg/smile";
import Fiveer from '../assets/fiveer';
import { InView } from 'react-intersection-observer';
import Upwork from '../assets/upwork';
import Facebook from '../assets/facebook';
import Linkedin from '../assets/Linkedin';
import emailjs from 'emailjs-com';




 const Contact=forwardRef(({},ref)=>{

    const [isViewed, setIsViewed] = useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState(false);
    const [emailError, setEmailError] = useState('');
    const [stop, setStop] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    // Regular expression pattern for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the pattern
    if (!emailPattern.test(value)) {
      setEmailError('Please enter a valid email address');
      setStop(false)
    } else {
      setEmailError('');
      setStop(true)
    }
  };
    
    const contactIconsVarient={
        initial:{opacity:0},
        animate:{
            opacity:[0,1],
            transition:{
                duration:2,
                times:[0,1]
            }

        }
    };



    function sendEmail() {
        if(name !== '' && email !=='' && stop){

            

        
        emailjs.send('service_drwdl84', 'template_sge762j', {
         name: name,
         email: email
        }, 'AtEtCzKRNtqkKD2bP')
        .then((response) => {
          
          if(response.status=== 200){
            setEmail('');
            setName('');
            setMessage('Your email has been recieved. Thanks')
            
          }
        }, (error) => {
          
        });
    }
      }





  
    const handleInView = (inView) => {
      if (inView && !isViewed) {
        setIsViewed(true);
      }
    };

    return(
        <>
        <motion.div ref={ref}  className='w-full  sm:max-md:py-2 bg-gray-100 min-h-[100vh] lg:max-xl:min-h-[120vh] max-h-[120vh]'>
        <div className='w-full sm:max-md:w-[100%] '>
           
        <div className='flex -mb-28  w-full flex-col'>
            <p className='text-center -ml-6 font-Abel   text-emerald-600 font-bold text-[3rem]'>Contact Us</p>
            <InView onChange={handleInView}>
      {({ inView, ref }) => (
        <div className='mx-auto sm:max-md:relative sm:max-md:flex sm:max-md:w-[100%] -mt-16' ref={ref}>
          {isViewed || inView ? <Smile  /> : null}
        </div>
      )}
    </InView>
    </div>
    <div className='w-full grid  sm:max-md:w-[80%] grid-cols-2 sm:max-md:grid-cols-1'>
        <div className='w-[60%] md:max-lg:w-[80%] sm:max-md:hidden mx-auto '>
           <motion.div initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:0.5}}} className='w-[80%] mt-16 p-6 bg-emerald-600'>
            <p className='font-Poppins text-white  text-xl font-bold mb-12'>Contact Info:</p>
            <p className='font-Poppins text-white my-4  text-sm'>Chak No.121,
              <span className='block'>SB SARGODHA</span>
            </p>
            <p className='font-Poppins text-white  text-sm'>+92 3007220692</p>
            <p className='font-Poppins text-white my-4 text-sm'>danigondal122@gmail.com</p>
            <p className='text-white text-lg font-Poppins'>Let's connect</p>
           
            <InView >
      {({ inView, ref }) => (
        <motion.div  ref={ref}>
          {inView && ( // Render the component only when it's in view
          <motion.div  initial='initial' transition={{staggerChildren:0.5}} animate='animate' className='flex flex-row justify-between'>
           <motion.div   variants={contactIconsVarient}>  <Fiveer />   </motion.div>
           <motion.div  variants={contactIconsVarient}>  <Upwork />  </motion.div>
           <motion.div  variants={contactIconsVarient}> <Facebook />  </motion.div> 
           <motion.div  variants={contactIconsVarient}> <Linkedin />  </motion.div>
           </motion.div>
          )}
        </motion.div>
       
      )}
    </InView>
         
           
           </motion.div>

        </div>
        <div className='w-[60%] md:max-lg:w-[70%] sm:max-md:w-[80%] mx-auto'>
            <p className='text-[1.5rem] sm:max-[425px]:w-[100%] font-bold mx-16 font-Abel '> Fill-out Form</p>
            <div className='mx-16 w-[100px] h-[5px] mt-2 mb-12 bg-emerald-600'></div>
        <div className='mx-16 w-full flex flex-col'>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className="w-[80%] text-gray-600  font-Poppins text-xl bg-gray-100 border-b-4  border-emerald-600 text-sm font-Livvic focus:outline-none"  />
       
        <input
        value={email}
        onChange={handleChange}
        type="text"
        placeholder="Email"
        className="w-[80%] my-4 text-gray-700 font-Poppins text-xl mt-8 bg-gray-100 border-b-4  border-emerald-600 text-sm font-Livvic focus:outline-none"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" // Regular expression pattern
        title="Please enter a valid email address"
      />
      {emailError && <p className="text-red-500">{emailError}</p>}
       {message && <p className="font-Lexend text-lg">{message}</p>
 }
       </div>
       <button onClick={sendEmail} className='mx-16 font-Lexend text-md text-emerald-700 p-2  mt-8 border-2 border-emerald-600 rounded-sm sm:max-md:text-md sm:max-md:w-[80%] hover:bg-emerald-600 hover:text-white'>Send Message</button>

        </div>
      
    </div>

       
        </div>
       

    </motion.div>
        </>
    )
});



export default Contact;