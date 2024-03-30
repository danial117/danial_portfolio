
import React from 'react';
import {motion} from 'framer-motion'
import { useMediaQuery } from '@material-ui/core';
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };


function LineMorph(props) {

    const isMobile = useMediaQuery('(max-width:768px)');

    
      

  return (
    <motion.svg
      id={props.id}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      width={!isMobile?400:300}
      height={!isMobile?400:300}
      initial='hidden'
      animate='visible'
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      {...props}
     
      
    >
      <motion.g transform="matrix(2.799741 0 0 1.736923 -305.788863 -112.46161)">
        <motion.g transform="matrix(1.051265 0 0 1.076981 -8.71029 -11.748049)">
          <motion.path
            d="M166.917349,80.370778v17.133411l-23.39195.000002"
            transform="translate(.000001 .000001)"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="1"
            variants={draw}
            custom={0.1}
           
          />
          <motion.path
            d="M166.91735,120.232184q11.189166-.349661,11.538827-.349661t0-11.189168h17.832733"
            transform="translate(.000001 .000001)"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="1"
            variants={draw}
              custom={0.1}
          />
          <motion.path
            d="M166.917351,133.16966h-23.391952"
            transform="translate(.000001 0)"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="1"
            variants={draw}
            custom={0.1}
          />
          <motion.path
            d="M166.91735,145.407809l18.881718-.349661"
            transform="translate(0 .000001)"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="1"
            variants={draw}
            custom={0.1}
          />
          <motion.path
            d="M166.91735,224.848668v-3.322846-28.214393-24.4763-71.330937"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="1"
            variants={draw}
            custom={0.1}
          />
         
          <motion.path
            d="M143.525398,168.835129h23.391952l.000002,24.4763h11.538826v14.184598l17.832733-1.107615"
            transform="translate(.000001 0)"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="1"
            variants={draw}
            custom={0.1}
          />
          <motion.path
            d="M166.91735,201.126334h-23.391951"
            transform="translate(.000001 0)"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="1"
            variants={draw}
            custom={0.1}
          />

        </motion.g>
      </motion.g>
    </motion.svg>
  );
}

export default LineMorph;
