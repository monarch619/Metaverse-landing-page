import React from 'react'
import Navbar from './Navbar'
import { Banner } from '../Styles/HeaderStyle'
import { motion } from 'framer-motion'


/*-------Framer-Motion-variants-------*/
const containerVariants = {
  animate: {
    transition: {
      delayChildren: .5,
      staggerChildren: .5,
    }
  }
}


/*-------Framer-Motion-variants-------*/
const contentVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80
    }
  }
}


const Header = () => {
  return (
    <Banner>
        {/*---------BANNER-NAVBAR---------*/}
        <Navbar />


        {/*---------BANNER-BODY---------*/}
        <div className='banner-body'>

          {/*--------BANNER-INTRO--------*/}
          <motion.div className='banner_intro' variants={containerVariants} initial='initial' animate='animate'>
            <motion.h1 variants={contentVariants}>Find Your <span>Space</span> in Metaverse Built on Algo Chain</motion.h1>
            <motion.p variants={contentVariants}>The Metaverse Studio focuses on opening portals to digital spaces for our partners with a whole new level of gaming,thats why we choose Algorand to build this</motion.p>
            <motion.button variants={contentVariants}>Get in touch</motion.button>
          </motion.div>


          {/*--------BANNER-FOOTER--------*/}
          <motion.div className='banner_footer' variants={containerVariants} initial='initial' animate='animate'>
            <motion.div className='banner_footer-item' variants={contentVariants}>
              <div>
                <figure>
                  <img src='https://i.postimg.cc/CK13WZvR/earth.png' alt='earth' />
                </figure>
                <h5>THE EARTH</h5>
              </div>
              <p>The Metaverse Studio focuses on opening portals to digital spaces for our partners</p>
            </motion.div>

            <motion.div className='banner_footer-item' variants={contentVariants}>
              <div>
                <figure>
                  <img src='https://i.postimg.cc/zG0mtwkm/moon.png' alt='earth' />
                </figure>
                <h5>THE MOON</h5>
              </div>
              <p>The Metaverse Studio focuses on opening portals to digital spaces for our partners</p>
            </motion.div>

            <motion.div className='banner_footer-item' variants={contentVariants}>
              <div>
                <figure>
                  <img src='https://i.postimg.cc/wBGCH6P0/mars.png' alt='earth' />
                </figure>
                <h5>THE MARS</h5>
              </div>
              <p>The Metaverse Studio focuses on opening portals to digital spaces for our partners</p>
            </motion.div>
          </motion.div>

{/*--------BANNER-IMAGE--------*/}
          <motion.figure className='astraunat-img' initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: .7 }}>
            <img src='https://i.postimg.cc/fbzBw5Gw/Real-astronaut-transparent-PNG-5000x5000.png' alt='astronaut' />
          </motion.figure>

          
        </div>
    </Banner>
  )
}

export default Header
