
import Square from "../../svg/square";
import {motion} from 'framer-motion'

const Squared = () => {
    return (
      <motion.div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "blue",
          position: "absolute",
          top: "50%",
          left: "50%",
         
        }}
        animate={{ rotate: 360 }} // Rotate the square continuously
        transition={{ duration: 2, loop: Infinity, ease: "linear" }} // Set up continuous rotation animation
      >

    <Square />
      </motion.div>
    );
  };

  export default Squared;