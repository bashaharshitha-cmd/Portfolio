import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import SingleSkill from './SingleSkill';
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
    skill:"TaiWindCSS",
    icon:SiTailwindcss
}, {
    skill:"Python",
    icon:FaPython
},
  
  
  
];

const AllSkill = () => {
  return (
    <div>
    <div className='flex items-center justify-center relative gap-2 max-w-[1500px] mx-auto'>
{skills.map((item,index)=>{
    return  <motion.div 
                     variants={fadeIn('up',`${index}`)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{once:false ,amount:0.2}}>

    <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
</motion.div>
})}
    </div>
    </div>
  );
};

export default AllSkill;