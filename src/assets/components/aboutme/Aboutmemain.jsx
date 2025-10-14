import React from 'react'
import Abouttext from './Abouttext'
import { fadeIn } from '../../../framermotion/varients';
import { motion } from 'framer-motion';

const Aboutmemain = () => {
  return (
    <div 
    id= "about" 
    className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center ' >
       
       <motion.div 
       variants={fadeIn('down',0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{once:false ,amount:0}}>
<Abouttext/>
       </motion.div>
        
    </div>
  );
};

export default Aboutmemain;