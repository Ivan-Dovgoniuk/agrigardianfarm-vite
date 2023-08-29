import { useState } from 'react'
import '../components/css/menu.css'
import crossIcon from '../images/cross-icon.png'
import logo from '../images/agri.png'
import { Link } from 'react-router-dom'

export const Menu =({
  isToken,
  signout
})=>{

  const [isActive,setIsActive] = useState(false)

  return(
    <>
    <div className="menu-btn"
          onClick={()=>setIsActive(true)}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
	  </div>
      <div className={isActive ? 'menu-container-active' : 'menu-container'}>
        <div className='menu-content-header'>
          <a href='https://agriguardian.farm/'><img src={logo} width={72} height={60} /></a>
          <button onClick={()=>setIsActive(false)}>
            <img src={crossIcon}/>
          </button>
        </div>
         <nav className="nav-burger-menu">
            <div className="nav-burger-item">
              <a href={'https://agriguardian.farm/'}>
                Home
              </a>
            </div>
            <div className="nav-burger-item">
              <a href={'https://agriguardian.farm/?page_id=901'}>
                Our Story
              </a>
            </div>
            <div className="nav-burger-item">
              <a href={'https://agriguardian.farm/?page_id=828'}>
                Features
              </a>
            </div>
            <div className="nav-burger-item">
              <a href={'https://agriguardian.farm/?page_id=1474'}>
                Pricing
              </a>
            </div>
            <div className="nav-burger-item">
              <a href={'https://agriguardian.farm/?page_id=840'}>
                FAQ
              </a>
            </div>
            <div className="nav-burger-item">
              <a href={'https://agriguardian.farm/?page_id=1616'}>
                Media
              </a>
            </div>
            <div className="nav-burger-item">
              <a href={'https://agriguardian.farm/?page_id=1700'}>
                Download
              </a>
            </div>
            <div className="nav-burger-item">
              <a  href={'https://agriguardian.farm/?page_id=962'}>
                Contact us
              </a>
            </div>
        </nav>
        {isToken && <div className="nav-burger-button">
              <Link style={{margin:0}} to={'/sign-in'}>
                <button type="button" style={{margin:0,color:'black'}} onClick={()=>signout()} className="button-sign-out">Sign out</button>
              </Link>
            </div>}
      </div>
    </>
  )
}