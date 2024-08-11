import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/Section6.css'; // Assurez-vous que le chemin est correct

// Importez les images nécessaires
import backgroundImage from './Pic/GettyImages-1016194666-3.png'; // Assurez-vous que le chemin est correct
import questionMarkImage from './Pic/élément1jaunne.png'; // Assurez-vous que le chemin est correct
import starImage from './Pic/starpetit.png'; // Assurez-vous que le chemin est correct
import flowerImage from './Pic/Groupe 67.png'; // Assurez-vous que le chemin est correct

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  useEffect(() => {
    // Animation pour chaque partie du titre avec un décalage de temps plus important
    gsap.fromTo('.highlight-yellow',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.highlight-white',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 70%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.highlight-tunisie',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: true,
        },
      }
    );

    // Animation pour le point d'interrogation
    gsap.fromTo('.question-mark',
      { opacity: 0, scale: 0.8, rotation: 200 },
      {
        opacity: 1,
        scale: 1,
        rotation: -5,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 50%',
          end: 'bottom 40%',
          scrub: true,
        },
      }
    );

    // Animation pour la description
    gsap.fromTo('.description-text',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 2.5,
        stagger: 0.4, // Ajoute un délai plus long entre chaque phrase
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 50%',
          end: 'bottom 40%',
          scrub: true,
        },
      }
    );

    // Animation pour les décorations
   
  }, []);

  return (
    <section className="section6">
      <div className="background-image-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
      <div className="section6-content">
        <div className="title-container">
          <h1 className="main-title">
            <span className="highlight-yellow">Comment</span>
            <br />
            <span className="highlight-white">elles ont</span>
            <br />
            <span className="highlight-tunisie">fait évoluer la tunisie</span>
            <img src={questionMarkImage} alt="Question Mark" className="question-mark" />
          </h1>
        </div>
        <div className="description-container">
          <p className="description-text">
            des activités ont été mises en œuvre pour favoriser la créativité et l’esprit communautaire
          </p>
          <p className="description-text">
            améliorer la jouissance de droits humains pour les femmes et les filles et faire progresser l’égalité entre les sexes en Tunisie
          </p>
        </div>
        <div className="decoration-container">
          <img src={starImage} alt="Star" className="star-image section6-star" />
          <img src={flowerImage} alt="Flower" className="flower-image" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
