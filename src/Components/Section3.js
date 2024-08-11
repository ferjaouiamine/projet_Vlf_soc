import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/Section3.css';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useEffect(() => {
    gsap.utils.toArray('.section3 .text-left, .section3 .text-right, .section3 .arrow-container').forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0, 
          ease: 'power2.out', 
          duration: 1, 
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            toggleActions: 'restart pause reverse pause',
          },
        });
    });
  }, []);

  return (
    <section className="section3">
      <div className="section3-content">
        <div className="text-left">
          <p className="main-title">À TRAVERS DES ACTIONS FINANCÉES PAR</p>
          <div className="funds-info">
            <span className="number">3</span>
            <span className="funds">fonds</span>
          </div>
        </div>
        <div className="text-right">
          <ul className="funds-list">
            <li className="fund-item fund-item1">le fonds pluriannuel</li>
            <li className="fund-item fund-item2">le fonds réactif</li>
            <li className="fund-item fund-item3">le fonds innovation</li>
          </ul>
        </div>
      </div>
      <div className="arrow-container">
        <span className="arrow">➜</span>
      </div>
      <div className="background-image" />
    </section>
  );
};

export default Section3;
