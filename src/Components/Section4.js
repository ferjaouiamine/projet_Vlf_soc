import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/Section4.css';
import backgroundImage from './Pic/Rectangle 170.png'; // Remplacez par le chemin correct
import durationImage from './Pic/Groupe 160.png'; // Remplacez par le chemin correct
import hourglassImage from './Pic/Groupe 162.png'; // Remplacez par le chemin correct
import handImage from './Pic/Groupe 164.png';

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  useEffect(() => {
    gsap.fromTo('.section4 .duration-image', 
      { y: '100%', opacity: 0 }, 
      {
        y: '0%', 
        opacity: 1, 
        ease: 'power3.out', 
        duration: 1.5, 
        scrollTrigger: {
          trigger: '.section4',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.section4 .hourglass-image', 
      { x: '-100%', opacity: 0 }, 
      {
        x: '0%', 
        opacity: 1, 
        ease: 'power3.out', 
        duration: 1.5, 
        scrollTrigger: {
          trigger: '.section4',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.section4 .hand-image', 
      { x: '0%', y: '-100%', opacity: 0 }, 
      {
        x: '0%', 
        y: '0%',
        opacity: 1, 
        ease: 'power3.out', 
        duration: 2, 
        scrollTrigger: {
          trigger: '.section4',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section4">
      <div className="background-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
      <div className="duration-objective-container">
        <img src={durationImage} alt="Durée" className="duration-image" />
        <img src={hourglassImage} alt="Hourglass" className="hourglass-image" />
        <img src={handImage} alt="Hand" className="hand-image" />
      </div>
    </section>
  );
};

export default Section4;
