import React from 'react'
import { Section } from '../Styles/SectionSecondStyle'
import { motion } from 'framer-motion'



/*---------Framer-Motion-Variants---------*/
const controls = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: (custom) => ({
    y: 0, 
    opacity: 1, 
    transition: { 
      ease: 'linear', 
      delay: custom * .2, 
      duration: .5
    }
  }) 
}



const SectionSecond = () => {
  return (
    <Section>

        {/*-------------IMAGE--------------*/}
        <motion.figure className='section_figure' initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: .3, duration: .7 } }} viewport={{ once: true }}>
           <img src="https://i.postimg.cc/bJXkqPp8/Group-19936-min-removebg-preview.png" alt='motherboard-img' />
        </motion.figure>


        {/*-------------TEXT--------------*/}
        <motion.div className='section_desc'>
            <motion.h1 custom={1} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>The value of Digital Twins</motion.h1>
            <motion.p custom={2} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>Unscripted Tech is a new Globant original podcast about the trends that are changing how the technology game is played</motion.p>
            <motion.p custom={3} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>Listen to Mortin Szeing, VP of technology, Diego Jaimes, IoT Engineer and IoT practice lead, and Matias Rodriguez, VP of technology at Globant Games  discuss the good and bad uses of the concept of twins and how technologies like AI are enabling those twins to be more robust.</motion.p>
            <motion.button custom={4} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>Learn More</motion.button>
        </motion.div>
        
    </Section>
  )
}

export default SectionSecond
