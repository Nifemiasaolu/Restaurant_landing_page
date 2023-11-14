import React from 'react';

import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div className='mb-4'>
    <p className='p-cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon-img'/>
  </div>
);

export default SubHeading;
