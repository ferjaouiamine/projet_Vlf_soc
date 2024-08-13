import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/Section6.css';

// Import necessary images
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
    // General parallax effect for the background
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

    // Titles Animations: Slide in with rotation and scaling
    const titleAnimation = (selector, delay) => {
      gsap.fromTo(selector, 
        { opacity: 0, y: 50, scale: 0.9, rotation: -15 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotation: 0, 
          duration: 1.5, 
          ease: 'power3.out', 
          scrollTrigger: {
            trigger: selector,
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
          },
          delay: delay,
        }
      );
    };

    titleAnimation('.comment-title', 0);
    titleAnimation('.ellesont-title', 0.2);
    titleAnimation('.tunisie-title', 0.4);

    // Description Animations: Slide in from the sides
    gsap.fromTo('.description1', 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 2, 
        ease: 'power2.out', 
        scrollTrigger: {
          trigger: '.description1',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.description2', 
      { opacity: 0, x: 100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 2, 
        ease: 'power2.out', 
        scrollTrigger: {
          trigger: '.description2',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    // Decorative Elements: Spin and scale effect
    gsap.fromTo('.star', 
      { opacity: 0, rotation: -180, scale: 0.5 }, 
      { 
        opacity: 1, 
        rotation: 0, 
        scale: 1.2, 
        duration: 3, 
        ease: 'elastic.out(1, 0.5)', 
        scrollTrigger: {
          trigger: '.star',
          start: 'top 85%',
          end: 'top 65%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.flower', 
      { opacity: 0, rotation: 180, scale: 0.5 }, 
      { 
        opacity: 1, 
        rotation: 0, 
        scale: 1.2, 
        duration: 3, 
        ease: 'elastic.out(1, 0.5)', 
        scrollTrigger: {
          trigger: '.flower',
          start: 'top 85%',
          end: 'top 65%',
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
          <img src={titleCommentImage} alt="Comment" className="comment-title" />
          <img src={titleEllesOntImage} alt="Elles Ont" className="ellesont-title" />
          <img src={titleFaitEvoluerImage} alt="Fait Evoluer la Tunisie" className="tunisie-title" />
          <img src={questionMarkImage} alt="Question Mark" className="question-mark-section6" />
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
