import React from 'react';
import { CgArrowTopRightO } from "react-icons/cg";
import { fadeIn } from '../../../framermotion/varients';
import { motion } from 'framer-motion';


const SingleProject = ({ name, align, image, link }) => {
  return (
    < motion.div
    variants={fadeIn('up',0.2)}
                   initial="hidden"
                    whileInView="show"
                   viewport={{once:false ,amount:0}}
      className={`flex w-full sm:flex-col-reverse items-center gap-4 ${
        align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      } justify-center`}
    >
      {/* Text Section */}
      <div className='flex-1'>
        <h2 className='md:text-3xl sm:text-2xl text-orange font-bold'>{name}</h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'
          }`}
        >
          View <CgArrowTopRightO />
        </a>
      </div>

      {/* Image Section */}
      <div className='flex-1 max-w-[50%] min-w-[250px] h-[350px] rounded-xl overflow-hidden relative border border-white hover:scale-105 transform transition-all duration-500'>
        <img
          src={image}
          alt="Project"
          className='w-full h-full object-cover'
        />
      </div>
    </motion.div>
  );
};

export default SingleProject;
