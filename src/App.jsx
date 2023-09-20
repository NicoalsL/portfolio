import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import './App.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// Enregistrez le plugin MotionPath


function App() {

  const slideInTop = ( elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideInLeft = ( elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }



  const utils = (tl) => {
    gsap.utils.toArray(".layer").forEach(layer => {
      const speed = layer.dataset.speed;
      const movement = -(layer.offsetHeight * speed)
      tl.to(layer, {
        y: movement,
        ease: 'none'
      },0)
    });
  }

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger:{
  //       trigger: "#parallax",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true
  //     }
  //   })
  //   utils(tl)
  // }, [])
  // useEffect(() => {
  //   slideInTop("#Box1")
  // }, [])
  // useEffect(() => {
  //   slideInLeft("#Box2")
  // }, [])
  // useEffect(() => {
  //   slideInLeft("#Box3")
  // }, [])

  return (
    <>
    <div className="header">
      <div className='header-text'><h1>Lebon Nicolas</h1></div>

    </div>
    <div className="transparent-div"></div>

    <div className="content">
      <div className="nuage"></div>

</div>
<div className="transparent-div"></div>

    </>
  )
}

export default App
