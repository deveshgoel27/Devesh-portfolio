import React, { useRef, useState } from 'react'
import "./NavBar.css"
// import logo from "../../assets/logo.svg"
import logo from "../../assets/devesh_logo1.png";
import underLine from "../../assets/nav_underline.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const NavBar = () => {

      const [menu,setMenu] = useState("home");     
       const menuRef = useRef();

       const openMenu =()=>{
        menuRef.current.style.right="0";
       }

       const closeMenu =()=>{
        menuRef.current.style.right="-350px";
       }
  return (
    <div className='navBar'>
       <img src={logo} alt="logo" className='nav-logo' />
       <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
       <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underLine} alt=''/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underLine} alt=''/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underLine} alt=''/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underLine} alt=''/>:<></> }</li>
       </ul>
        <button className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></button>
    </div>
  )
}

export default NavBar