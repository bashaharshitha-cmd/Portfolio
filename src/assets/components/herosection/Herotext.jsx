import React from 'react'
import { fadeIn } from '../../../framermotion/varients';
import { motion } from 'framer-motion';

const Herotext = () => {
  return (
    <div className="flex flex-col w-full p-[40px] gap-4  justify-center items-center">
        < motion.h2
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false,amount:0}}
        className="lg:text-2xl sm:text-xl  uppercase text-cyan"
       >
            Front-End web Developer  </motion.h2>
        <motion.h1
         variants={fadeIn("right",0.4)}
         initial="hidden"
         whileInView="show"
         viewport={{once:false, amount:0}} 
         className='md:text-[2.8rem]  lg:text-6xl sm:text-4xl font-bold font-special text-orange'>
          Harshitha Basha
          </motion.h1>
        <motion.p 
        variants={fadeIn("up",0.6)}
         initial="hidden"
         whileInView="show"
         viewport={{once:false, amount:0}}

  className="text-lg mt-4 text-white font-josefin"
   >

  I am a passionate front-end web developer learning the latest technologies.<br/>
  I love building responsive websites and turning creative ideas into engaging web experiences.



         </motion.p>

        

    </div>
  );
};

export default Herotext;