import React from 'react'
import { useSelector } from 'react-redux';

const ShopInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);
  
  return (
    <div>
      
    </div>
  )
}

export default ShopInfo
