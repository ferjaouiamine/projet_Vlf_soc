import React from 'react';
import './Cssfile/section8.css';
import backgroundImage from './Pic/backgroundImage8.png'; // Image de fond de la section
import developedActions from './Pic/elles-ont-developpe.png'; // Image "elles ont développé"
import actionsImage from './Pic/des-actions.png'; // Image "des actions"
import inTimeImage from './Pic/dans-le-temps.png'; // Image "dans le temps"
import starImage from './Pic/etoilepetite.png'; // Image "étoile petite"
import allSectionImage from './Pic/toutlasection8.png'; // Image pour toute la section
import demiCercle from './Pic/demicercle.png'; // Nouvelle image "demicercle"
import starNawra from './Pic/starnawara.png'; // Nouvelle image "starnawra"

const Section8 = () => {
  return (
    <section className="section8 " >
      <div className="background-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
      <div className="section8-content">
        <img src={developedActions} alt="Elles ont développé" className="developed-actions-image" />
        <img src={actionsImage} alt="Des actions" className="actions-image" />
        <img src={inTimeImage} alt="Dans le temps" className="in-time-image" />
        <img src={starImage} alt="Étoile petite" className="star-image" />
        <img src={allSectionImage} alt="Tout la section" className="all-section-image" />
        <img src={demiCercle} alt="Demi Cercle" className="demi-cercle-image" /> {/* Ajout de la nouvelle image demicercle */}
        <img src={starNawra} alt="Star Nawra" className="star-nawra-image" /> {/* Ajout de la nouvelle image starnawra */}
      </div>
    </section>
  );
};

export default Section8;
