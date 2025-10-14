import React from 'react'

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className='relative hover:-translate-y-10 transition-all duration-500'>
        <div className='flex flex-col items-center gap-2 relative'>
            <div className='bg-white text-cyan h-[100px] w-[150px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange'>
                {imgSvg}
            </div>
            <p className='text-white font-bold'>{text}</p>
        </div>

        {/* Original orange background without extra classes */}
        <div className='w-[150px] h-[200px] bg-orange absolute top-[50px] -z-10'> </div>
    </div>
  );
};

export default SingleSkill;
