import { useState, RefObject, useEffect } from "react";






export function useFollowPointer(ref) {
    console.log(ref)
    const [point, setPoint] = useState({ x: 0, y: 0 });
  
    
    useEffect(() => {
      if (!ref.current) return;
      
      const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current;
  console.log(element.offsetLeft,' ' ,element.offsetTop,' ',element.offsetHeight,' ',element.offsetWidth)
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;

        setPoint({ x, y });
       
      };
  
      window.addEventListener("pointermove", handlePointerMove);
     
  
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);
  
    return point;
  }











