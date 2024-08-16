import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/Section3.css';
import img3 from './Pic/3.png';
import imgFunds from './Pic/Fonds.png';
import imgFund1 from './Pic/le fonds pluriannuel.png';
import imgFund2 from './Pic/le fonds réactif.png';
import imgFund3 from './Pic/le fonds innovation.png';
import atravers from './Pic/atravers.png';

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durée de l'animation pour chaque élément
    });
  }, []);

  return (
    <section className="section3">
      <div className="section3-content">
        <div className="text-left">
          <img 
            src={atravers} 
            alt="À travers" 
            className="atraver-img" 
            data-aos="fade-up" 
            data-aos-delay="0" 
          />
          <div className="funds-info">
            <img 
              src={img3} 
              alt="3" 
              className="number-img" 
              data-aos="fade-up" 
              data-aos-delay="500" 
            />
            <img 
              src={imgFunds} 
              alt="fonds" 
              className="funds-img" 
              data-aos="fade-up" 
              data-aos-delay="1000" 
            />
          </div>
        </div>
        <div className="text-right">
          <ul className="funds-list">
            <li className="fund-item">
              <img 
                src={imgFund1} 
                alt="le fonds pluriannuel" 
                className="fund-img" 
                data-aos="fade-up" 
                data-aos-delay="1500" 
              />
            </li>
            <li className="fund-item">
              <img 
                src={imgFund2} 
                alt="le fonds réactif" 
                className="fund-img" 
                data-aos="fade-up" 
                data-aos-delay="2000" 
              />
            </li>
            <li className="fund-item">
              <img 
                src={imgFund3} 
                alt="le fonds innovation" 
                className="fund-img" 
                data-aos="fade-up" 
                data-aos-delay="2500" 
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="arrow-container">
        <span 
          className="arrow" 
          data-aos="fade-up" 
          data-aos-delay="3000"
        >➜</span>
      </div>
      <div className="background-image" />
    </section>
  );
};

export default Section3;
