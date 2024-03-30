

import {motion} from 'framer-motion'






 const Smile=()=>{

    const circleVariant = {
        initial: { opacity: 1 }, // Initial position and opacity
        animate: {
          x: [0,175,260], // Move the circle 100 units on the x-axis
          
          y: [0,140,0], // Maintain the same position on the y-axis
          transition: {
           y:{duration:0.5, ease:'linear', times:[0,0.3,1]},
           x:{duration:0.5, ease:'linear', times:[0,0.5,1]},

           
           
            
          },
        },
      };

      const LineVarient={
        initial:{pathLength:0, opacity: 0},
        animate:{
            pathLength:[0,0.5,1],
            opacity:[1,1,1],
            transition:{
                duration:1.5,
                times:[0,0.3,1],
                ease:'linear'
            }
        }
      }

      

    return(
        <motion.svg
        
        width="500"
        height="250"
        viewBox="0 0 600 600"
        initial='initial'
        animate='animate'

        className='scale-50'
       
        
        
      >
     { /* 
         
          
     */}
     <motion.circle
        cx="100"
        cy="100"
        r="40"
        stroke="#059669"
        fill="#059669"
        className="fill-emerald-600"
   />

<motion.circle
        cx="100"
        cy="100"
        r="40"
        stroke="#059669"
        className="fill-emerald-600 relative z-100"
        variants={circleVariant}
       
    />
       
      <motion.path
        d="M100,140 C150,250 300,250 350,140"
        strokeWidth="15"
        stroke="#059669"
        fill="none"
        variants={LineVarient}
        className='relative z-10'
        
      />


        </motion.svg>
    )


}



export default Smile;






                                                           