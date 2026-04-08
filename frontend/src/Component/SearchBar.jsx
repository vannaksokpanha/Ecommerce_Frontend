import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../Context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);  
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/Collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center py-8'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 w-1/2 mx-auto rounded-full '>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}  
          className='flex-1 outline-none bg-inherit text-sm' 
          type="text" 
          placeholder='Search for products...' 
        />
        <img className='w-4 cursor-pointer' src={assets.search_icon} alt="" />
      </div>
      <img 
        onClick={() => setShowSearch(false)} 
        className='inline w-3 cursor-pointer ml-2' 
        src={assets.cross_icon || assets.search_icon} 
        alt="" 
      />
    </div>
  ) : null
}

export default SearchBar