import {motion} from 'framer-motion'







const Square = () => {
    return (
        <motion.svg
            id="eep1mF9N7VU1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
           










        >
            <motion.g  animate={{ rotate: 360 }} // Rotate the square continuously
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }} // Set up continuous rotation animation 
            transform="translate(0 0.000001)">
                <rect
                    width="66.390483"
                    height="69.564501"
                    rx="0"
                    ry="0"
                    transform="translate(89.473347 180.4355)"
                    fill="#6b21a8"
                    strokeWidth="0"
                />
                <rect
                    width="44.34331"
                    height="52.96688"
                    rx="0"
                    ry="0"
                    transform="matrix(1.185277 0 0 1.052226 96.389036 187.351187)"
                    fill="#6b21a8"
                    strokeWidth="0"
                />
            </motion.g>
        </motion.svg>
    );
};

export default Square;