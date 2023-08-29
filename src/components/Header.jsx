import "./css/header.css"
import logo from '../images/agri.png';
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import { Menu } from "./Menu";

export const Header = ()=> {

  const [isToken,setIsToken] = useState(false)

  const location = useLocation()

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token && location.pathname != '/' && location.pathname != '/sign-in' && location.pathname !='/sign-up'){
      setIsToken(true)
    }else{
      setIsToken(false)
    }
  },[location.pathname])
 
  const signout = () => {
    setIsToken(false)
    localStorage.setItem("token", null)
  }

  return(
    <div className='header-container'>
      <div className='header-content'>
        <div>
          <a className="header-logo" href={'https://agriguardian.farm/'}>
            <img src={logo} alt="Logo" width={72} height={60} />
          </a>
        </div>
        <Menu isToken={isToken} signout={signout} />
        <nav className="nav-bar">
            <div className="nav-bar-item">
              <a href={'https://agriguardian.farm/'}>
                Home
              </a>
            </div>
            <div className="nav-bar-item">
              <a href={'https://agriguardian.farm/?page_id=901'}>
                Our Story
              </a>
            </div>
            <div className="nav-bar-item">
              <a href={'https://agriguardian.farm/?page_id=828'}>
                Features
              </a>
            </div>
            <div className="nav-bar-item">
              <a href={'https://agriguardian.farm/?page_id=1474'}>
                Pricing
              </a>
            </div>
            <div className="nav-bar-item">
              <a href={'https://agriguardian.farm/?page_id=840'}>
                FAQ
              </a>
            </div>
            <div className="nav-bar-item">
              <a href={'https://agriguardian.farm/?page_id=1616'}>
                Media
              </a>
            </div>
            <div className="nav-bar-item">
              <a href={'https://agriguardian.farm/?page_id=1700'}>
                Download
              </a>
            </div>
            <div className="nav-bar-item">
              <a  href={'https://agriguardian.farm/?page_id=962'}>
                Contact us
              </a>
            </div>
          {isToken && <div className="nav-bar-item">
              <Link style={{margin:0}} to={'/sign-in'}>
                <button type="button" style={{margin:0,color:'black'}} onClick={()=>signout()} class="button-sign-out">Sign out</button>
              </Link>
            </div>}
        </nav>
      </div>
    </div>
  )
}