import React from 'react'
import { Link } from "react-scroll";
import { FiArrowDownRight } from "react-icons/fi";

const Navbarbtn = () => {
  return (
    <div>
      <button className='px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
         <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      
        <div className='sm:hidden  md:block'>
            <FiArrowDownRight />  
          </div>  
      </button>
    </div>
  );

};

export default Navbarbtn;