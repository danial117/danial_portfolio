import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    // Trigger the second animation after the first animation completes
    const timeout = setTimeout(() => {
      setShowFirst(!showFirst);
      setShowSecond(!showSecond);
    }, 2000); // Adjust the delay time according to your first animation duration

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, [showFirst]);

  return (
    <AnimatePresence>
      {showFirst && (
        <motion.div
          key="first"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Your first animation */}
          <div>First Animation</div>
        </motion.div>
      )}
      {showSecond && (
        <motion.div
          key="second"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Your second animation */}
          <div>Second Animation</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleComponent;