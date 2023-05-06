import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Utils/context';
import { Cart } from '../Cart/Cart';
import "./Header.scss";
import { Search } from './Search/Search';
function Header() {
const [scrolled,setscrolled] = useState(false)
const [showCart,setShowCart] = useState(false)
const [showSearch,setShowSearch] = useState(false)
const {cartCount} = useContext(Context)
const navigate = useNavigate()
const handleScroll = ()=>{
  const offset =window.scrollY;
  if(offset > 200){
     setscrolled(true);
  }else{
    setscrolled(false);
  }
};
  useEffect(() => {
   window.addEventListener("scroll",handleScroll) 
}, [])
  
  return (
    <> 
        <header className={`main-header ${scrolled ? "sticky-header" :""}`}>
        <div className="header-content">
          <ul className='left'>
            <li onClick={()=>navigate("/") }>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={()=>navigate("/") }>FSDEvSTORE....</div>
          <div className="right">
            <TbSearch onClick={()=>setShowSearch(true)}/>
            <AiOutlineHeart/>
            <span className='cart-icon' onClick={()=>setShowCart(true)}>
              <CgShoppingCart />
             {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {showSearch &&    <Search setShowSearch={setShowSearch}/> }
     </>

  );
}

export default Header