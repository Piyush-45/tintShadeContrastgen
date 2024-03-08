import React, { useContext } from 'react'
 
const Complimentary = ({complementaryColor}) => {
    
  return (
    <div className='mt-10'>
    <h2 className='font-semibold text-2xl'>Complementary:</h2>
    <div className="flex flex-row mt-4">
        {complementaryColor?.map((color, index) => (
            <div key={index} className='hover cursor-pointer text-white text-center pt-9' style={{ backgroundColor: color, width: '100px', minHeight: '100px', color: 'white' }} onClick={() => copyToClipboard(color)}>
                {color}
            </div>
        ))}
    </div>
</div>
  )
}

export default Complimentary
