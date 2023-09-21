import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import './App.css'
import Card from './component/Card';

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
          start: "top top",
          end: "top center"
        }
      }
    )
  }
  const windowWidth = window.innerWidth;
  const nuage = (cloud) => {
    gsap.to(cloud, {
      x: 1000, // Réinitialisez la position gauche à 0 (position de départ)
      duration: 8, // Durée de l'animation en secondes
      scrollTrigger: {
        trigger: cloud, // Déclenchez l'animation lorsque la div est visible
        start: 'top 80%', // Démarrez l'animation lorsque le centre de la div atteint le haut de la fenêtre
        scrub: true,
        end: 'top 30%', // Terminez l'animation lorsque le centre de la div atteint le bas de la fenêtre
        toggleActions: "restart none none none",
        markers: {
          startColor :"purple",
          endColor: "fuchsia",
          fontSize: "3rem"
        },
        scrub: true, // Faites correspondre l'animation à la vitesse de défilement
      },
    });

  }

  const slideInLeft = ( elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 500,
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
   useEffect(() => {
    nuage(".nuage")
   }, [])


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
      <div className="nuage">
      </div>
        <div className="contenu">
          <h1>Projets</h1>
          <div className="projet">
            <Card
                title="Titre de la carte"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            

          
          </div>


          
        </div>

</div>
<div className="transparent-div"></div>
<div className="content">
      <div className="nuage"></div>

</div>

    </>
  )
}

export default App
