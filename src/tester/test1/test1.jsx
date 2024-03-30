
import { motion } from 'framer-motion';


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1 },
  };
  
  const MyComponent = () => {
    return (
      <motion.div
        initial="hidden" // Initial state
        animate="visible" // Target state to animate to
        whileHover="hover" // State to transition to on hover
        variants={variants} // Define the variants
      >
        Hello, Framer Motion!
      </motion.div>
    );
  };

  export default MyComponent