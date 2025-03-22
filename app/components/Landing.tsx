import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
// import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard'
// import Lenis from '@studio-freight/lenis/types'

const Landing = () => {
  // const lenis = new Lenis()

  // lenis.on('scroll', (e: Event) => {
  //   console.log(e)
  // })

  // function raf(time: number) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />


      {/* <TiltedCard/> */}
    </>
  )
}

export default Landing