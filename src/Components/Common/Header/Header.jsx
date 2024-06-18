import React from 'react'
import './style.css'
import TemporaryDrawer from './drawer';
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>
        CoinometeR <span style={{color: "var(--blue"}}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className='link'>Home</p>
        </Link>
        <Link to="/compare">
          <p className='link'>Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className='link'>Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} 
          onClick={()=> console.log("Btn Clicked")}/>
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header
