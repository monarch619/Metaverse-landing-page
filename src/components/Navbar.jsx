import React, { useState } from 'react'
import { MdMenu, MdSort, MdOutlineClose } from "react-icons/md";
import { Nav } from '../Styles/NavbarStyle'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  
  return (
    <Nav 
        initial={{ y: 30, opacity: 0 }} 
        animate={{ y: 0, opacity: 1, transition: { duration: .6 }}} 
    >
        {/*------------LOGO------------*/}
        <div className='navbar_logo'>
            <h1>Metacube</h1>
        </div>


        {/*------------PROFILE-IMAGE------------*/}
        <motion.div className='navbar_profile-image' initial={{ y: 15, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }}>
            <img src='#' />
            <span><MdSort /></span>
        </motion.div>


        {/*------------TOGGLE-BUTTON------------*/}
        <div className='navbar_toggle-button'>
            <button onClick={() => setMenu(!menu) }>
                { menu ? <MdOutlineClose /> : <MdMenu /> }
            </button>
        </div>


        {/*------------LINKS------------*/}
        <div className='navbar_links-container' data-show={menu && 'true'}>
            <ul className='links'>
                <li>Market place</li>
                <li>Stacking</li>
                <li>Digital Twin</li>
                <li>NFTs</li>
                <li>Metaverse</li>
                <li>Get from Tinyman</li>
            </ul>
        </div>

    </Nav>
  )
}

export default Navbar


