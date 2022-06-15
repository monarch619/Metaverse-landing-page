import React from 'react'
import { Section } from '../Styles/SectionFirstStyle'
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


const SectionFirst = () => {
  return (
    <Section>

        {/*-------------IMAGE--------------*/}
        <motion.figure className='section_figure' initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: .3, duration: .7 } }} viewport={{ once: true }}>
            <img src="https://i.postimg.cc/y6LvGVJG/brain.png" alt='brain-img' />
        </motion.figure>


        {/*-------------TEXT--------------*/}
        <motion.div className='section_desc'>
            <motion.h1 custom={1} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>MetaSpace Services</motion.h1>
            <motion.span custom={2} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>The Metaverse Studio focuses on 3 services.</motion.span>
            <motion.ul custom={3} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>
                <li>Virtual Worlds and Digital Twins</li>
                <li>Projection to the Metaverse</li>
                <li>Virtual Protection</li>
            </motion.ul>
            <motion.button custom={4} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>Learn More</motion.button>
        </motion.div>
        
    </Section>
  )
}

export default SectionFirst