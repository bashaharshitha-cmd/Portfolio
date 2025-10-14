import React from 'react'

const Singlecontact = ({Icon,link}) => {
  return (
    <div className='text-2xl h-12 w-12 border-orange text-orange rounded-full items-center justify-center'>
<a href={link} className='cursor-pointer'>
    <Icon/>
</a>

    </div>
  );
};

export default Singlecontact;