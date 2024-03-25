import React from 'react'
import { useSelector } from 'react-redux';

const DashboardHeader = () => {
    const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      
    </div>
  )
}

export default DashboardHeader
