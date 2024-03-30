import "./styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./pointer";

export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
   console.log(x,y)
  return (
    <>
   
<motion.svg
      id="eJLpwWRO0zN1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width="200"
      height="200"
    >
      <ellipse rx="57.009346" ry="53.271028" transform="translate(139.252337 106.542056)" fill="#d2dbed" strokeWidth="0" />
      <motion.ellipse 
     ref={ref}
      animate={{ x, y }}
      transition={{
       
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }} rx="16.82243" ry="16.82243" fill='#fff' transform="translate(139.252337 106.542056)" strokeWidth="0" />
    </motion.svg>
   

</>

    
  );
}
