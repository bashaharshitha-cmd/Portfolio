import React from 'react'
import SkillText from './SkillText'
import AllSkill from './AllSkill'
import SingleSkill from './SingleSkill'
import AllSkillsSm from './AllSkillsSm'
import { fadeIn } from '../../../framermotion/varients';
import { motion } from 'framer-motion';


const Skillmain = () => {
  return (
    <div id="skill">
        
        
        <div className='max-w-[1700px] px-4 mx-auto min-h-[600px] relative  overflow-hidden '>
           <motion.div 
                 variants={fadeIn('down',0.2)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{once:false ,amount:0}}>
 <SkillText/>
                 </motion.div>
       
       
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden' >
          <AllSkill/>
         </div>
         <div className='sm:block lg:hidden'>
          <AllSkillsSm/>
          </div>
         </div> 
        
    </div>
  )
}

export default Skillmain