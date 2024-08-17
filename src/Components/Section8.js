import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/section8.css';
import backgroundImage from './Pic/backgroundImage8.png'; // Image de fond de la section
import developedActions from './Pic/elles-ont-developpe.png'; // Image "elles ont développé"
import actionsImage from './Pic/des-actions.png'; // Image "des actions"
import inTimeImage from './Pic/dans-le-temps.png'; // Image "dans le temps"
import starImage from './Pic/etoilepetite.png'; // Image "étoile petite"
import allSectionImage from './Pic/toutlasection8.png'; // Image pour toute la section
import demiCercle from './Pic/demicercle.png'; // Nouvelle image "demicercle"
import starNawra from './Pic/starnawara.png'; // Nouvelle image "starnawra"
import p1 from './Pic/p1.png';  // Nouvelle image ajoutée
import p2 from './Pic/p2.png';  // Nouvelle image ajoutée
import p3 from './Pic/p3.png';  // Nouvelle image ajoutée
import p4 from './Pic/p4.png';  // Nouvelle image ajoutée
import p5 from './Pic/p5.png';

gsap.registerPlugin(ScrollTrigger);

const Section8 = () => {
  useEffect(() => {
    // Initialisation de AOS
    AOS.init({
      duration: 1200,
    });

    // Animation GSAP pour les éléments spécifiques
    gsap.fromTo(
      '.star-image',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section8',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    // gsap.fromTo(
    //   '.star-nawra-image',
    //   { rotation: -180, opacity: 0 },
    //   {
    //     rotation: 0,
    //     opacity: 1,
    //     duration: 2,
    //     ease: 'power2.out',
    //     scrollTrigger: {
    //       trigger: '.section8',
    //       start: 'top 80%',
    //       end: 'bottom 60%',
    //       scrub: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <section className="section8">
        <img src={p1} alt="Photo 1" className="p1"     data-aos="fade-up" 
          data-aos-delay="500"  />
        <img src={p2} alt="Photo 2" className="p2"     data-aos="fade-up" 
          data-aos-delay="1000"  />
        <img src={p3} alt="Photo 3" className="p3"     data-aos="fade-up" 
          data-aos-delay="1500"  />
        <img src={p4} alt="Photo 4" className="p4"     data-aos="fade-up" 
          data-aos-delay="2000"  />
        <img src={p5} alt="Photo 4" className="p5"     data-aos="fade-up" 
          data-aos-delay="2500"  />
      <div className="background-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
      <div className="section8-content">
        <img 
          src={developedActions} 
          alt="Elles ont développé" 
          className="developed-actions-image" 
          data-aos="fade-up" 
          data-aos-delay="0" 
        />
        <img 
          src={actionsImage} 
          alt="Des actions" 
          className="actions-image" 
          data-aos="fade-up" 
          data-aos-delay="500" 
        />
        <img 
          src={inTimeImage} 
          alt="Dans le temps" 
          className="in-time-image" 
          data-aos="fade-up" 
          data-aos-delay="1000" 
        />
        <img 
          src={starImage} 
          alt="Étoile petite" 
          className="star-image" 
        />
        <img 
          src={allSectionImage} 
          alt="Tout la section" 
          className="all-section-image" 
          data-aos="fade-up" 
          data-aos-delay="1500" 
        />
        <img 
          src={demiCercle} 
          alt="Demi Cercle" 
          className="demi-cercle-image" 
          data-aos="fade-up" 
          data-aos-delay="2000" 
        />
        <img 
          src={starNawra} 
          alt="Star Nawra" 
          className="star-nawra-image" 
        />
      </div>
    </section>
  );
};

export default Section8;
