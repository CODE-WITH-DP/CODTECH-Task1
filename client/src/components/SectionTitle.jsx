import React from 'react'
import PropTypes from 'prop-types';

function SectionTitle({
  title,
}) {
  return (
    <div className='flex gap-10 items-center py-10'>
      <h1 className='text-3xl text-secondary font-semibold'>{title}</h1>
      <div className='w-40 h-[1px] bg-tertiary'></div>
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};


export default SectionTitle