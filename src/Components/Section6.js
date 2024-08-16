import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/Section6.css'; 

// Import the necessary images
import backgroundImage from './Pic/GettyImages-1016194666-3.png';
import questionMarkImage from './Pic/élément1jaunne.png';
import starImage from './Pic/starpetit.png';
import flowerImage from './Pic/Groupe 67.png';
import titleCommentImage from './Pic/Comment.png';
import titleEllesOntImage from './Pic/elles ont.png';
import titleFaitEvoluerImage from './Pic/fait évoluer la Tunisie.png';
import descriptions1s6Image from './Pic/description1s6.png';
import descriptions2s6Image from './Pic/descriptions2s6.png';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  useEffect(() => {
    // Initialisation de AOS
    AOS.init({
      duration: 1200, // Durée de l'animation AOS
    });

    // Parallax background effect
    gsap.to('.background-image', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section6',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Question mark with elastic rotation
    gsap.fromTo(
      '.question-mark-section6',
      { opacity: 0, scale: 0.8, rotation: -180 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 70%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );

    // Descriptions slide-in effect
    gsap.fromTo(
      '.description1',
      { opacity: 0, x: -750 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.description2',
      { opacity: 0, x: 750 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );

    // Continuous floating effect for decorative elements
    gsap.to('.star', {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'sine.inOut',
    });

    gsap.to('.flower', {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: 'sine.inOut',
    });

    // Rotate decorative elements
    gsap.fromTo(
      ['.star', '.flower'],
      { opacity: 0, rotation: -45 },
      {
        opacity: 1,
        rotation: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section6">
      <div className="background-image-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
      <div className="section6-content">
        <div className="title-container">
          <img 
            src={titleCommentImage} 
            alt="Comment" 
            className="comment-title" 
            data-aos="fade-up" 
            data-aos-delay="0"
          />
          <img 
            src={titleEllesOntImage} 
            alt="Elles Ont" 
            className="ellesont-title" 
            data-aos="fade-up" 
            data-aos-delay="500"
          />
          <img 
            src={titleFaitEvoluerImage} 
            alt="Fait Evoluer la Tunisie" 
            className="tunisie-title" 
            data-aos="fade-up" 
            data-aos-delay="800"
          />
          <img 
            src={questionMarkImage} 
            alt="Question Mark" 
            className="question-mark-section6" 
          />
        </div>
        <div className="description-container">
          <img src={descriptions1s6Image} alt="Description 1" className="description1" />
          <img src={descriptions2s6Image} alt="Description 2" className="description2" />
        </div>
        <div className="decoration-container">
          <img src={starImage} alt="Star" className="star" />
          <img src={flowerImage} alt="Flower" className="flower" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
