import React from 'react'

function ImageGalery({carDetail}) {
  return (
    <div>
        <img src={carDetail?.images[0].imageUrl} className='w-full h-[300px] object-cover rounded-xl'/>
    </div>
  )
}

export default ImageGalery