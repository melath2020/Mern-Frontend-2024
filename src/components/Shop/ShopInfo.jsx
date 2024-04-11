import React from 'react'
import { useSelector } from 'react-redux';
import { backend_url } from '../../server';

const ShopInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);
  
  return (
    <div className="w-full py-5">
        <div className="w-full flex item-center justify-center">
        <img
            src={`${backend_url}${seller?.avatar}`}
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-[20px]">{seller.name}</h3>
        <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
          {seller.description}
        </p>
      
    </div>
  )
}

export default ShopInfo
