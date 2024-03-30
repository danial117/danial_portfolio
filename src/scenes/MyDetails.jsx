
import { useEffect,forwardRef, useState,useRef } from 'react';
import {motion} from 'framer-motion'
import Circle from '../svg/circle';
import EducationLine from '../tester/test5/educationLine';

import LineMorph from '../tester/test4/LineMorph';


function TypeEffect({ text }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
  
    useEffect(() => {
      const timer = setInterval(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex => currentIndex + 1);
      }, 100); // Adjust typing speed here (milliseconds)
  
      // Clear the interval if the component unmounts or the typing is completed
      return () => clearInterval(timer);
    }, [currentIndex, text]);
  
    useEffect(() => {
      // After 5 seconds, stop typing and show full text
      const timeout = setTimeout(() => {
        setDisplayedText(text);
        clearInterval();
      }, 3000); // Adjust total time here (milliseconds)
  
      // Clear the timeout if the component unmounts
      return () => clearTimeout(timeout);
    }, [text]);
  
    return (
      <div>
        <p className='font-Abel text-[1.8rem] font-bold text-center mt-4'>{displayedText}</p>
       
        
      </div>
    );
  }


const IntroDetails=forwardRef(({scrollToContacts},ref)=>{



    const [intro,setIntro]=useState('Intro');
    const[year,setYear]=useState(2019)
    const [count,setCount]=useState(1);
    const [lineFill,setLineFill]=useState([20,0]);


    
    const onButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch("/assets/Danial_CV.pdf").then((response) => {
            console.log(response)
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Danial_CV.pdf";
                alink.click();
            });
        });
    };



    const EducationVarient={
             
        animate:{
            transition:{
                delayChildren:1,
                staggerChildren:0.7
            }
        }

    }

    const EducationVarientChildren={

        initial:{opacity:0},
        animate:{
            opacity:1,
            transition:{
                duration:0.4,
                ease:'linear'
            }
        }

    }



    
    

 
   const Extra=({lineFill})=>{
   

   





    

    return(
  
        <div className='w-[45%] sm:max-md:w-[80%] md:max-lg:w-[65%] flex flex-row h-[3px] mt-2 mx-auto bg-gray-300'>
            <div className={`basis-[20%] mr-4 ${intro==='Intro' && 'bg-black '}`}  ></div>
            <div className={`basis-[20%] ${intro==='Skills' && 'bg-black '} `} ></div>
            <div className={`basis-[30%] ${intro==='Experiance' && 'bg-black '} `}></div>
            <div className={`basis-[30%] ${intro==='Education' && 'bg-black '}`}></div>

            
            
           

        </div>
    )
   }
 
 

  const NumberVarient=(position1,position2)=>{
    return{

    
    initial:{
        position:'relative',
        left:'0%',
        opacity:0
           
    },
        animate:{
       
            left:['0%',position1,position2],
            opacity:[1,1,1],

            transition:{
                duration:1,
                times:[0,0.5,1],
                ease:'linear'

            }

        }
    }         
  };

  const NumberMotionDiv = ({ position1,position2,value }) => {
    const variants = NumberVarient(position1,position2);

    return (
        <motion.p className='inline font-Lexend text-gray-700'
            variants={variants}
            initial="initial"
            animate="animate"
        >{value}%</motion.p>
    );
};




    const LineVariant = (width) => {
        return {
            initial: {
               
                height: '4px',
                position: 'relative',
                backgroundColor: '#6b21a8',
                marginBottom: '14px',
            },
            animate: {
                backgroundColor: '#6b21a8',
                width: ['0%', width],
                transition: {
                    duration: 1,
                    times: [0, 1],
                    ease: 'linear',
                    
                },
            },
        };
    };

    const LineMotionDiv = ({ width }) => {
        const variants = LineVariant(width);
    
        return (
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
            ></motion.div>
        );
    };
    

    


    return(
        <>
        <div ref={ref} className="w-full   relative z-700 max-h-[100vh] min-h-[80vh]">
                 <div className="flex w-[40%] sm:max-md:w-[70%]  md:max-lg:w-[60%]   mx-auto justify-between flex-row">
                    <p  onClick={()=>{setIntro('Intro')}} className={`  text-gray-600 sm:max-md:text-sm sm:max-md:ml-2 hover:text-black-400 cursor-pointer  text-lg font-Lexend font-bold  ${intro==='Intro' && 'text-black'}`}>Intro</p>
                    <p  onClick={()=>{setIntro('Skills'); }} className={`text-gray-600 sm:max-md:text-sm sm:max-md:ml-2 hover:text-black-400 cursor-pointer text-lg font-Lexend font-bold ${intro==='Skills' && 'text-black'}`}>Skills</p>
                    <p  onClick={()=>{setIntro('Experiance')}} className={`text-gray-600 sm:max-md:text-sm sm:max-md:ml-2 hover:text-black-400 cursor-pointer text-lg font-Lexend font-bold  ${intro==='Experiance' && 'text-black'}`}>Experiance</p>
                    <p onClick={()=>{setIntro('Education')}}  className={`text-gray-600 sm:max-md:text-sm sm:max-md:ml-2 hover:text-black-400  cursor-pointer  text-lg font-Lexend font-bold  ${intro==='Education' && 'text-black'}`}>Education</p>

                 </div>

                 <Extra  />

                


               {
                intro === 'Intro' &&

                <div className="grid w-[80%] sm:max-md:w-[100%] md:max-lg:w-[90%] mx-auto grid-cols-2 sm:max-[425px]:grid-cols-1">

                
                 <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:0.6}}} className="w-[80%] sm:max-[425px]:w-[100%] ml-auto mr-8 max-h-[50vh] min-h-[40vh] bg-cover my-2 mt-8   " style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(${require('../assets/Intro1.jpeg')})`}}>

                 </motion.div>

                 <div className="w-[90%] sm:max-[425px]:mb-16 sm:max-[425px]:mx-auto sm:max-[425px]:w-[70%]">
                    <motion.p initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.3}}} className="font-Abel mb-8 text-xl sm:max-md:text-lg font-bold my-2 mt-8 text-gray-700">Hi, I am UI/UX Designer</motion.p>
                    <motion.p initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.3}}} className="font-Livvic text-lg mb-2 sm:max-md:text-xs  text-gray-600">I am also a node Js developer with  a backend development. As a Node.js developer, you play a crucial role in building scalable and efficient server-side applications. Your expertise in JavaScript and backend development enables you to create robust solutions that meet the requirements of modern web applications. </motion.p>
                    <div className=''>
                     <button onClick={onButtonClick} className='font-Poppins border-purple-900 border-2 border-md p-2 sm:max-md:text-sm  text-purple-900 mr-4 hover:bg-purple-900 hover:text-white hover:shadow-md hover:shadow-purple-900'>Download CV </button> 
                        <button onClick={scrollToContacts}  className='cursor-pointer font-Poppins border-purple-900 border-2 border-md p-2  text-purple-900 hover:bg-purple-900 hover:text-white hover:shadow-md hover:shadow-purple-900'>Contact</button>
                    </div>
                 </div>

                 </div>

               }

             {intro ==='Skills' &&  <div className=' '>
                
                <div className='mt-2 sm:max-[425px]:w-[70%] sm:max-md:w-[80%] sm:max-md:h-[100vh] md:max-lg:w-[60%] w-[40%] mx-auto'>
                    <motion.p initial={{x:-150,opacity:0.5}} whileInView={{x:0,opacity:1, transition:{duration:0.4}}} className='font-Abel sm:max-md:text-[1.5rem] mt-4 font-bold text-[2rem]'>About Me</motion.p>
                    <motion.p initial={{x:150,opacity:0.5}} whileInView={{x:0,opacity:1, transition:{duration:0.4} }} className='font-Poppins sm:max-md:text-sm text-lg mb-8 mr-[10%]'>I am skilled at various Web Development languages. Some of them are as below:</motion.p>
                <p className='font-Lexend text-xl mb-2'>HTML/CSS</p>
                <NumberMotionDiv value={95}  position1='45%' position2='90%' />
            <LineMotionDiv   width={'90%'} />
           
                <p className='font-Lexend text-xl mb-2'>Javascript</p>
                <NumberMotionDiv value={70}  position1='35%' position2='70%' />
                <LineMotionDiv  width='70%' />
                <p className='font-Lexend text-xl mb-2'>Node JS</p>
                <NumberMotionDiv value={80}  position1='40%' position2='80%' />
            <LineMotionDiv  width='80%' />
                <p className='font-Lexend text-xl mb-2'>React</p>
                <NumberMotionDiv value={85}  position1='44%' position2='85%' />
            <LineMotionDiv  width='85%' />
                </div>

               </div>}










               {
                intro === 'Experiance' && 
                <div className='w-[60%] sm:max-md:w-[100%] sm:max-[425px]:w-[100%]  sm-md:max-[767px]:w-[90%] sm:max-md:h-[100vh] md:max-lg:w-[80%] mx-auto  relative'>
                    <TypeEffect   text='Full Stack Web Developer' />
                    


                    <motion.div variants={EducationVarient} initial='initial' animate='animate' className='ml-[20%] relative  mt-2 '>

                        <motion.div variants={EducationVarientChildren} className='absolute left-[5%] top-[5%] sm:max-md:w-[60px] sm:max-md:h-[60px] w-[80px] h-[80px]  bg-no-repeat bg-cover bg-center ' style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(${require('../assets/HtmlCSS.webp')})`}} >
                            
                            </motion.div> 

                            <motion.div variants={EducationVarientChildren} className='absolute md:max-[864px]:left-[71%]  sm:max-md:left-[75%] sm:max-md:bottom-[63%] lg:max-xl:left-[70%] left-[60%] bottom-[65%]'>
                        <p className='font-Poppins sm:max-md:text-sm sm:max-[425px]:text-[12px] text-lg '>Html CSS</p>
                        <p className='font-Livvic sm:max-md:text-[8px] text-xs '>I am very experianced with the basics of web development</p>
                    </motion.div>

                            <motion.div variants={EducationVarientChildren}  className='absolute w-[30%]  sm:max-md:left-[-10%] left-[-14%] top-[35%]' >
                            <motion.p className='font-Poppins sm:max-md:text-sm text-lg sm:max-[425px]:text-[12px] text-right'>Node JS</motion.p>
                        <motion.p className='font-Livvic sm:max-md:text-[8px] text-xs '>I am very experianced with the backend development.</motion.p>
                            
                            </motion.div> 

                            <motion.div variants={EducationVarientChildren} className='absolute  sm:max-md:left-[75%] sm:max-md:bottom-[35%] md:max-[864px]:left-[71%] w-[70px] lg:max-xl:left-[70%] h-[70px] left-[55%]  bottom-[40%]'  >
                        <img src={`${require('../assets/node.png')}`} />
                        
                    </motion.div>

                             
                    <motion.div variants={EducationVarientChildren} className='absolute left-[0%] top-[55%] w-[100px] h-[70px]  bg-no-repeat sm:max-md:w-[70px] sm:max-md:h-[60px] bg-cover bg-center ' style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0), rgba(0,0,0,0)), url(${require('../assets/react.png')})`}} >
                            
                            </motion.div> 

                      
                    <motion.div variants={EducationVarientChildren} className='absolute left-[60%] sm:max-md:left-[75%] sm:max-md:bottom-[2%]  md:max-[864px]:left-[71%]  lg:max-xl:left-[70%]  bottom-[5%]'>
                        <p className='font-Poppins sm:max-md:text-sm text-lg sm:max-[425px]:text-[12px]'>React JS</p>
                        <p className='font-Livvic sm:max-md:text-[8px] text-xs '>I can create a powerful application through react.</p>
                    </motion.div>
           
                         

                 


                            <motion.div variants={EducationVarientChildren} className='absolute w-[40%] sm:max-md:left-[-21%]   left-[-24%] top-[78%]' >
                            <p className='font-Poppins sm:max-[425px]:text-[12px] sm:max-md:text-sm text-lg text-right'>2019-2024</p>
                        <p className='font-Livvic sm:max-[425px]:ml-8  sm:max-md:text-[8px] text-xs '>Many years of experiance.</p>
                            
                            </motion.div> 




                            

                    

                    


                    
           

                    <LineMorph />



                    </motion.div>


                    </div>
               }


               {
                intro === 'Education' &&
                <div className='w-full sm:max-[425px]:w-[95%] mx-auto'>


                    <div className='flex mt-8 flex-row '>   

                    <div className='basis-[20%] w-full mx-auto relative'>
                        <p className='text-[2rem] sm:max-md:text-[1.5rem] font-Lexend text-center ml-16 mt-18'>Education & Awards</p>
                        <div className='w-full sm:max-md:left-[-21%] sm:max-md:top-[0%]  absolute top-[10%]'>
                    <EducationLine year={year}/>
                        </div>
                    <p onClick={()=> setYear(2019)} className={`absolute cursor-pointer font-Lexend ${year === 2019 && 'font-bold'} top-[38%] left-[32%] lg:max-xl:left-[45%] lg:max-xl:top-[43%] md:max-lg:left-[50%] md:max-lg:top-[42%]`}>2019</p>
                    <p onClick={()=> setYear(2020)}  className={`absolute cursor-pointer font-Lexend ${year === 2020 && 'font-bold'} top-[50%] left-[32%] lg:max-xl:left-[45%] lg:max-xl:top-[56%] md:max-lg:left-[50%] md:max-lg:top-[56%]`}>2020</p>
                    <p onClick={()=> setYear(2021)} className={`absolute cursor-pointer font-Lexend ${year === 2021 && 'font-bold'} top-[62%] lg:max-xl:top-[69%] lg:max-xl:left-[45%] left-[32%] md:max-lg:left-[50%] md:max-lg:top-[67%]`}>2021</p>

                    </div>
                    <div className='basis-[60%] w-full mx-auto  grid grid-cols-3'>

                        {
                            year === 2019 &&
                                <>
                                 <div className='w-[100%] flex flex-col justify-between p-4 sm:max-md:p-0 border-2 rounded-md border-gray-100  h-auto mt-16  '>
                        <div className='overflow-hidden '>
                        <img className='sm:max-md:h-[150px] cursor-pointer transition hover:scale-125 duration-700 ' src={`${require('../assets/award2.png')}`} />
                         </div>

                        <div className='sm:max-md:hidden'>
                        <p className='text-center text-lg my-2 sm:max-md:text-[12px]   font-bold font-Abel'>ICS (Information And Computer Sciences)</p>
                        <p className='font-Poppins  text-sm text-center'>2019-2021</p>
                        </div>
                            
                        </div>

                                </>
                            
                        }

{
                            year === 2020 &&
                                <>
                                 <div className='w-[90%] flex flex-col justify-between sm:max-md:p-0 p-4 border-2 rounded-md border-gray-100  h-auto mt-16  '>
                        <div className='overflow-hidden '>
                        <img className='cursor-pointer sm:max-md:h-[150px] transition hover:scale-125 duration-700 ' src={`${require('../assets/award3.png')}`} />
                         </div>
                      
                         <div className='sm:max-md:hidden'>
                        <p className='text-center text-lg my-2 sm:max-md:text-[12px]  font-bold font-Abel'>Best Designer Of The Month</p>
                        <p className='font-Poppins  text-sm text-center'>2020-2021</p>
                            </div>
                        </div>

                        <div className='w-[90%] flex flex-col justify-between sm:max-md:p-0  p-4 border-2 rounded-md border-gray-100  h-auto mt-16  '>
                        <div className='overflow-hidden '>
                        <img className='cursor-pointer sm:max-md:h-[150px] transition hover:scale-125 duration-700 ' src={`${require('../assets/award2.png')}`} />
                         </div>
                         <div className='sm:max-md:hidden'>
                        <p className='text-center text-lg my-2 sm:max-md:text-[12px]  font-bold font-Abel'>ICS (Information And Computer Sciences)</p>
                        <p className='font-Poppins  text-sm text-center'>2019-2021</p>
                            </div>
                        </div>

                                </>
                            
                        }

                       
                       

                       

{
                            year === 2021 &&
                                <>
                                       <div className='w-[90%] flex flex-col justify-between sm:max-md:p-0  p-4 border-2 rounded-md border-gray-100  h-auto mt-16  '>
                        <div className='overflow-hidden '>
                        <img className='cursor-pointer sm:max-md:h-[150px] transition hover:scale-125 duration-700 ' src={`${require('../assets/award3.png')}`} />
                         </div>
                         <div className='sm:max-md:hidden'> 
                        <p className='text-center text-lg my-2 sm:max-md:text-[12px]  font-bold font-Abel'>Best UI/UX Designed </p>
                        <p className='font-Poppins text-sm text-center'>2020-2021</p>
                            </div>
                        </div>

                        <div className='w-[90%] flex flex-col justify-between sm:max-md:p-0 p-4 border-2 rounded-md border-gray-100  h-auto mt-16  '>
                        <div className='overflow-hidden '>
                        <img className='cursor-pointer sm:max-md:h-[150px] transition hover:scale-125 duration-700 ' src={`${require('../assets/award2.png')}`} />
                         </div>
                         <div className='sm:max-md:hidden'> 
                        <p className='text-center text-lg my-2  sm:max-md:text-[12px] font-bold font-Abel'>ICS (Information And Computer Sciences)</p>
                        <p className='font-Poppins text-sm text-center'>2019-2021</p>
                            </div>
                        </div>

                        <div className='w-[90%] flex flex-col justify-between sm:max-md:p-0 p-4 border-2 rounded-md border-gray-100  h-auto mt-16  '>
                        <div className='overflow-hidden '>
                        <img className='cursor-pointer sm:max-md:h-[150px] transition hover:scale-125 duration-700 ' src={`${require('../assets/award1.png')}`} />
                         </div>
                       <div className='sm:max-md:hidden'>
                        <p className='text-center text-lg my-2 sm:max-md:text-[12px]  font-bold font-Abel'>Best Designer Of The Month</p>
                        <p className='font-Poppins text-sm text-center'>2020-2021</p>
                            </div>
                        </div>

                                </>
                            
                        }

                        

                     
                       

                       
                    </div>
                   
                    
                    </div>


                </div>
               }
                 
           
        </div>
        </>
    )
});


export default IntroDetails;





 


































