import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { fadeIn } from '../../../framermotion/varients';
import { motion } from 'framer-motion';

const skills=[
    {
    skill:"HTML",
    icon:IoLogoHtml5
},
  {
    skill:"CSS",
    icon:IoLogoCss3
},
  {
    skill:"JavaScript",
    icon:IoLogoJavascript
},
  {
    skill:"ReactJS",
    icon:GrReactjs
},
 {
    skill:"Redux",
    icon:SiRedux
},
  {
    skill:"TaiwindCSs",
    icon:SiTailwindcss
},
 {
    skill:"Python",
    icon:FaPython
},
];

const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 '>
      {skills.map((item,index)=>{
        return <motion.div
        variants={fadeIn('up',0.2)}
        initial="hidden"
         whileInView="show"
        viewport={{once:false ,amount:0.7}}
         key={index} className='flex flex-col items-center'>
           < item.icon className='text-7xl text-orange'/>
           <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      })}  
    </div>
  )
}

export default AllSkillsSm