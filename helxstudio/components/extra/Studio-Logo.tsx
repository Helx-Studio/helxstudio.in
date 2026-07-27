import React from 'react'

const StudioLogo = ({width=22, height=20, className=""}) => {
  return (
    <div>
     <svg width={width} height={height} className={`${className}`} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M5.44 20L10.88 14.08V0H5.28L0 5.92V20H5.44Z" fill="#0A141E"/>
     <path d="M10.88 20V14.08L16.16 8H21.44V20H10.88Z" fill="#0A141E"/>
     </svg>
    </div>
  )
}

export default StudioLogo
