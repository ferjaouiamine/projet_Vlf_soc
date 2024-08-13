import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/Section2.css';

// Import the necessary images
import questionMark from './Pic/élément1.png';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.phrase-container');

    sections.forEach((section, index) => {
      const box = section.querySelector('.phrase-box');
      const question = section.querySelector('.question-mark');

      // Animation for text boxes with scrollTrigger for both directions
      gsap.fromTo(
        box,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Animation for the question marks with rotation and parallax effect
      gsap.fromTo(
        question,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50, rotation: index % 2 === 0 ? -45 : 45 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
            toggleActions: 'play reverse play reverse', // Ensures animation reverses on scroll back up
          },
        }
      );
    });

    // Parallax effect on background image for mobile
    gsap.to('.section2', {
      backgroundPositionY: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.section2',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: ({ progress }) => {
          if (window.innerWidth <= 768) {
            gsap.to('.section2', {
              backgroundPositionY: `${50 + progress * 20}%`,
            });
          }
        },
      },
    });
  }, []);

  return (
    <section className="section2">
      <div className="section2-content">
        <div className="phrase-container">
          <img src={questionMark} alt="Question Mark" className="question-mark" />
          <div className="phrase-box green-box">Comment elles ont</div>
        </div>
        <div className="phrase-container">
          <div className="phrase-box cyan-box">renforcé les communautés</div>
        </div>
        <div className="phrase-container">
          <div className="phrase-box purple-box">par l'expression et l'engagement</div>
          <img src={questionMark} alt="Question Mark" className="question-mark" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
