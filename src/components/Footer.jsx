import React from 'react'
import { FooterSection } from '../Styles/FooterStyle'
import { FaUserAstronaut, FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { motion } from 'framer-motion'

/*-----------Framer-Motion-variants-----------*/
const controls = {
    initial: {
        opacity: 0,
        y: 30
    },
    animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * .2,
            ease: 'linear'
        }
    }) 
}

const Footer = () => {
  return (
    <FooterSection>

        {/*-------------FOOTER-LEFT-SIDE-------------*/}
        <motion.figure className='footer_image' initial={controls.initial} whileInView={controls.animate} viewport={{ once: true}}>
            <img src='https://i.postimg.cc/YSz63MTT/Pngtree-video-game-controller-4830279-removebg-preview.png' alt='astraunat' />
        </motion.figure>



        {/*-------------FOOTER-RIGHT-SIDE-------------*/}
        <section>
            <motion.h1 className='footer_title' custom={1} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true}}>Contact Us</motion.h1>
            
            <motion.div className='footer_input' custom={1} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true}}>
                <input type='text' placeholder='email@gmail.com' />
                <button>Send Email</button>
            </motion.div>

            <motion.div className='footer_logo' custom={2} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true}}>
                <span>
                    <FaUserAstronaut />
                    <span>Meta<br />space</span>
                </span>
                <ul>
                    <li>HOME</li>
                    <li>STAKING</li>
                    <li>JOBS</li>
                </ul>
            </motion.div>

            <motion.div className='footer_socialMedias' custom={3} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true}}>
                <span>Copyright &copy; MetaSpace2022</span>
                <ul>
                    <li><FaDiscord /></li>
                    <li><FaTwitter /></li>
                    <li><FaTelegramPlane /></li>
                </ul>
            </motion.div>
        </section>

    </FooterSection>
  )
}

export default Footer
