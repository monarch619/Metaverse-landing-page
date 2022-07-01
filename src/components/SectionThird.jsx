import React from 'react'
import { Section } from '../Styles/SectionThirdStyle'
import { motion } from 'framer-motion'



/*----------Framer-Motion-Variants----------*/
const controls = {
  initial: {
    opacity: 0,
    y: 35
  },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: 'linear',
      delay: custom * .2
    }
  })
}


/*--------Images--------*/
const images = [
  
]

const SectionThird = () => {
  return (
    <Section >

        {/*-----------TITLE------------*/}
        <motion.div className="section_header" custom={1} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>
            <h1></h1>
        </motion.div>

        {/*-----------CONTENT------------*/}
        <motion.div className="section_technologies" custom={2} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>
          { images.map((image, index) => {
            return (
              <figure key={index}>
                <img src={image.image} alt={image.name} />
              </figure>
            )
          })}
        </motion.div>

    </Section>
  )
}

export default SectionThird
