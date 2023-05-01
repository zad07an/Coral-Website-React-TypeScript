import React from 'react'
import img1 from "../../../public/images/01.png"
import img2 from "../../../public/images/02.png"
import img3 from "../../../public/images/03.png"
import img4 from "../../../public/images/04.png"
import img5 from "../../../public/images/05.png"

const Explore: React.FC = () => {
  return (
    <div className=' w-full px-[40px] lg-1024:px-[120px] flex justify-between gap-4'>
      <div className=' w-[40px] flex items-center justify-center'>
        <div className=' w-full flex items-center justify-center rotate-[-90deg]'>
          <p className=' whitespace-nowrap uppercase text-3xl'>Explore new and popular styles</p>
        </div>
      </div>
      <div className=' w-full h-[600px] grid grid-cols-2 gap-4 overflow-hidden'>
        <div className=' h-full'>
          <img src={img1} alt="" className=' w-full object-cover'/>
        </div>
        <div className=' grid grid-cols-2 gap-4'>
          <div className=' w-full h-full overflow-hidden'>
            <img src={img2} alt="" className=' w-full object-cover' />
          </div>
          <div className=' w-full h-full overflow-hidden'>
            <img src={img3} alt="" className=' w-full object-cover' />
          </div>
          <div className=' w-full h-full overflow-hidden'>
            <img src={img4} alt="" className=' w-full object-cover' />
          </div>
          <div className=' w-full h-full overflow-hidden'>
            <img src={img5} alt="" className=' w-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore