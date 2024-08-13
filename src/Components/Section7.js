import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/Section7.css'; 

// Importing images to replace text and the new background images
import backgroundImage from './Pic/Groupe 260.png';
import handshake from './Pic/Groupe 264.png';
import titleImage from './Pic/titleImage.png';
import graceAuxImage from './Pic/graceAuxImage.png';
import etablisImage from './Pic/etablisImage.png';
import partnershipsImage from './Pic/partnershipsImage.png';

import orgsImage from './Pic/orgsImage.png';
import projectsImage from './Pic/projectsImage.png';
import andImage from './Pic/andImage.png';
import atfd from './Pic/atfdImage.png';

import actionsImage from './Pic/actionsImage.png';
import partnersListImage from './Pic/partnersListImage.png';
import number21Image from './Pic/number21Image.png';
import number31Image from './Pic/number31Image.png';
import projets44Image from './Pic/Projets44.png';
import backgroundImage2 from './Pic/jauneback.png';  
import backgroundImage3 from './Pic/noirback.png';  

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  useEffect(() => {
    // Flou et zoom sur les images au défilement
    const images = gsap.utils.toArray('.section7-content img');
    images.forEach((img) => {
      gsap.fromTo(img, 
        { scale: 0.9, filter: 'blur(10px)' }, 
        { scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out', 
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
          }
        }
      );
    });

    // Animation spécifique pour l'image de la poignée de main
    const handshakeAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.section7-handshake-image',
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: true
      }
    });

    handshakeAnimation
      .fromTo('.section7-handshake-image', 
        { scale: 1, opacity: 1 }, 
        { scale: 1.5, opacity: 0.5, duration: 1.5, ease: 'power3.out' }
      )
      .to('.section7-handshake-image', {
        scaleX: 0.5, 
        ease: 'power3.out',
        duration: 0.5
      })
      .to('.section7-handshake-image', {
        scaleX: 1, 
        scaleY: 0.5, 
        ease: 'power3.out',
        duration: 0.5
      })
      .to('.section7-handshake-image', {
        scaleY: 1, 
        opacity: 1, 
        duration: 1.5, 
        ease: 'power3.out'
      });

  }, []);

  return (
    <section className="section7">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <img src={backgroundImage2} alt="Background 2" className="background-image2" />  
      <img src={backgroundImage3} alt="Background 3" className="background-image3" />  
      <div className="section7-content">
        <img src={titleImage} alt="Elles ont pu agir" className="section7-title-image" />
        <img src={graceAuxImage} alt="Grâce aux" className="section7-graceaux-image" />
        <img src={etablisImage} alt="Etablis" className="section7-etablis-image" />
        <img src={partnershipsImage} alt="PARTENARIATS" className="section7-partnerships-image" />
        <div className="stats-container">
          <img src={number21Image} alt="21" className="section7-number21-image" />
          <img src={projets44Image} alt="Projets 44" className="section7-projets44-image" />
          <img src={andImage} alt="&" className="section7-and-image" />
          <img src={number31Image} alt="31" className="section7-number31-image" />
        </div>
        <img src={orgsImage} alt="Organisations partenaires" className="section7-orgs-image" />
        <img src={projectsImage} alt="Projets partenaires" className="section7-projects-image" />
        <img src={actionsImage} alt="ont mené des actions de changement" className="section7-actions-image" />
        <div className="handshake-container">
          <img src={handshake} alt="Handshake" className="section7-handshake-image" />
        </div>
        <img src={partnersListImage} alt="Partners list" className="section7-partners-list-image" />
        <img src={atfd} alt="Partners list" className="section7-atfd-image" />
      </div>
    </section>
  );
};

export default Section7;
