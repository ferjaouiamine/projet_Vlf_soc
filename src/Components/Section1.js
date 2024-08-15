import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/Section1.css'; // Make sure the path is correct
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
      duration: 1200, // Duration of the animation
    });
  }, []);

  return (
    <section className="section1">
      <div className="section1-content">
        <div className="main-title1" data-aos="fade-up">
          <img src={desOrganisations} alt="des organisations" className="des-organisations-image" />
          <img src={quiOnt} alt="qui ont" className="qui-ont-image" />
          <img src={renforce} alt="RENFORCÉ" className="renforce-image" />
          <img src={voixFeministe} alt="la voix féministe" className="voix-feministe-image" />
          <img src={enTunisie} alt="en Tunisie" className="en-tunisie-image" />
        </div>
        <div className="support-text-container" data-aos="fade-up">
          <span className="dashed-line"></span>
          <div className="circle-behind"></div>
          <img src={retrouvezLeur} alt="Retrouvez leur voyage" className="retrouvez-leur-image" />
        </div>
        <img src={trace_648} alt="Arrow Left" className="arrow-left" data-aos="fade-up" />
        <img src={Groupe_135} alt="Image Étoile" className="etoile" data-aos="fade-right" />
        <img src={Groupe_138} alt="Image Right" className="image-right" data-aos="fade-left" />
        <img src={Groupe_138} alt="Image Left" className="image-left" data-aos="fade-right" />
        <img src={Groupe_141} alt="Arrow Down" className="arrow-down" data-aos="fade-up" />
        <div className="button-container" data-aos="fade-up">
          <a href="#pdf" className="download-button">
            JE TÉLÉCHARGE LE LIVRE D’ART EN PDF
          </a>


        </div>

      </div>
      <img src={flechflower} alt="flecheflower" className="flechflower" data-aos="fade-up" />

    </section>
  );
};

export default Section1;
