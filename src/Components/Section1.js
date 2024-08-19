import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/Section1.css'; // Assurez-vous que le chemin est correct
import Groupe_135 from './Pic/Groupe 135.png';
import Groupe_138 from './Pic/Groupe 138.png';
import trace_648 from './Pic/Tracé 648.png';
import Groupe_141 from './Pic/Groupe 141.png';
import desOrganisations from './Pic/desOrganisations.png'; // Image for "des organisations"
import quiOnt from './Pic/quiOnt.png'; // Image for "qui ont"
import renforce from './Pic/renforce.png'; // Image for "RENFORCÉ"
import voixFeministe from './Pic/voixFeministe.png'; // Image for "la voix féministe"
import enTunisie from './Pic/enTunisie.png'; // Image for "en Tunisie"
import retrouvezLeur from './Pic/retrouvezLeur.png'; // Image for the paragraph
import flechflower from './Pic/flecheflower.png';

const Section1 = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,     // L'animation se déclenche une seule fois
      offset: 50, 
    });
    AOS.refresh(); 
  }, []);
  
  return (
    <section className="section1">
      <div className="section1-content">
        <div className="main-title1">
          <img 
            src={desOrganisations} 
            alt="des organisations" 
            className="des-organisations-image" 
            data-aos="fade-up" 
            data-aos-delay="0" 
          />
          <img 
            src={quiOnt} 
            alt="qui ont" 
            className="qui-ont-image" 
            data-aos="fade-up" 
            data-aos-delay="500" 
          />
          <img 
            src={renforce} 
            alt="RENFORCÉ" 
            className="renforce-image" 
            data-aos="fade-up" 
            data-aos-delay="1000" 
          />
          <img 
            src={voixFeministe} 
            alt="la voix féministe" 
            className="voix-feministe-image" 
            data-aos="fade-up" 
            data-aos-delay="1500" 
          />
          <img 
            src={enTunisie} 
            alt="en Tunisie" 
            className="en-tunisie-image" 
            data-aos="fade-up" 
            data-aos-delay="2000" 
          />
        </div>
        <div 
          className="support-text-container" 
          data-aos="fade-up" 
          data-aos-delay="2500"
        >
          <span className="dashed-line"></span>
          <div className="circle-behind"></div>
          <img 
            src={retrouvezLeur} 
            alt="Retrouvez leur voyage" 
            className="retrouvez-leur-image" 
            data-aos-delay="2600"
          />
        </div>
        <img 
          src={trace_648} 
          alt="Arrow Left" 
          className="arrow-left" 
          data-aos="fade-up" 
          data-aos-delay="3000" 
        />
        <img 
          src={Groupe_135} 
          alt="Image Étoile" 
          className="etoile" 
          data-aos="fade-right" 
          data-aos-delay="3500" 
        />
        <img 
          src={Groupe_138} 
          alt="Image Right" 
          className="image-right" 
          data-aos="fade-left" 
          data-aos-delay="4000" 
        />
        <img 
          src={Groupe_138} 
          alt="Image Left" 
          className="image-left" 
          data-aos="fade-right" 
          data-aos-delay="4500" 
        />
        <img 
          src={Groupe_141} 
          alt="Arrow Down" 
          className="arrow-down" 
          data-aos="fade-up" 
          data-aos-delay="4000" 
        />
        <div 
          className="button-container" 
          data-aos="fade-up" 
          data-aos-delay="5000"
        >

          <a href="#pdf" className="download-button">
            JE TÉLÉCHARGE LE LIVRE D’ART EN PDF
          </a>
        </div>
      </div>
      <img 
        src={flechflower} 
        alt="flecheflower" 
        className="flechflower" 
        data-aos="fade-up" 
        data-aos-delay="4500" 
      />
    </section>
  );
};

export default Section1;
