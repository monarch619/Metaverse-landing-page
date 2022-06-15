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
  {
    name: 'Quixel',
    image: 'https://i.postimg.cc/vTbq3C79/widen-920x0.png'
  },
  {
    name:'unreal engine',
    image: 'https://i.postimg.cc/kXYBkDPb/pes-2022-unreal-engine-1.png'
  },
  {
    name: 'xbox',
    image: 'https://i.postimg.cc/jS8m60NK/xbox-live.png'
  },
  {
    name: 'play station',
    image: 'https://i.postimg.cc/fbGH5wb4/395-3953048-file-playstation-logo-svg-wikimedia-commons-playstation-logo.png'
  },
  {
    name: 'unity',
    image: 'https://i.postimg.cc/gJbD8NMm/ogimg.png'
  },
  {
    name: 'oculus',
    image: 'https://i.postimg.cc/XJgwF3Gk/Oculus-Logo.png'
  }
]



const SectionThird = () => {
  return (
    <Section >

        {/*-----------TITLE------------*/}
        <motion.div className="section_header" custom={1} initial={controls.initial} whileInView={controls.animate} viewport={{ once: true }}>
            <h1>Technologies we use</h1>
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