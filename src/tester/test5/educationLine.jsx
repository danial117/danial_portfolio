


import { transform } from 'framer-motion';
import React from 'react';
import { useMediaQuery } from '@material-ui/core';

function EducationLine({year}) {

    const isMobile = useMediaQuery('(max-width:768px)');
    

    let transformValue = '';
    let path1='';
    let path2='';

    switch (year) {
        case 2019:
          transformValue = 'translate(132.818375 81.118375)';
          path1= "M132.816127,76.437226v-13.792214";
          path2= "M132.818375,175.92707l-0.002248,-89.793063";
          break;
        case 2020:
          transformValue = 'translate(132.818375 111.118375)';
          path1= "M132.816127,76.437226v-13.792214,43";
          path2= "M132.818375,175.92707l-0.002248,-58.793063";
          break;
        case 2021:
          transformValue = 'translate(132.818375 140.118375)';
          path1= "M132.816127,76.437226v-13.792214,72";
          path2= "M132.818375,175.92707l-0.002248,-30.793063";
          break;
        default:
          transformValue = 'translate(132.818375 80.118375)'; // Default transformation value
          break;
      }
    
  return (
    <svg
      
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 200 200"
      width={!isMobile?300:250}
      height={!isMobile?300:250}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      
    >
      <g>
        <path
          d="M115.632251,62.645012q-.87007,0,34.367749,0"
          transform="translate(.000001 0)"
          fill="#6b21a8"
          stroke="#6b21a8"
          strokeWidth="1.2"
        />
        <path
          d={path1}
          fill="#6b21a8"
          stroke="#6b21a8"
          strokeWidth="1.2"
        />
        <ellipse
          rx="1.678375"
          ry="1.678375"
          transform={transformValue}
          fill="#6b21a8"
          stroke="#6b21a8"
        />
        <path
          d= {path2}
          transform="translate(0 0.000001)"
          fill="#6b21a8"
          stroke="#6b21a8"
          strokeWidth="1.2"
        />
        <ellipse
          rx="1.678375"
          ry="1.678375"
          transform="translate(132.818375 175.12)"
          fill="#6b21a8"
          stroke="#6b21a8"
        />
      </g>
    </svg>
  );
}

export default EducationLine;