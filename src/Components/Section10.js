import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Cssfile/Section10.css";
import backligne from "./Pic/backligne.png"; // Image de fond
import debutpage from "./Pic/debutpage.png";
import atfd from "./Pic/Atfd.png";
import addci from "./Pic/addci.png";
import atac from "./Pic/Atac.png";
import rayhana from "./Pic/rayhana/rayhana.png";
import amal from "./Pic/Amal.png";
import ASSOCITIONDESFEMMESPOURLACITOYENNETE from "./Pic/ASSOCITIONDESFEMMESPOURLACITOYENNETE copy.png";
import cawtar from "./Pic/Cawtar.png";
import essabil from "./Pic/Essabil.png";
import tigar from "./Pic/Tigar.png";
import calm from "./Pic/Calm.png";
import circul1_2 from "./Pic/circul1_2.png";
import ASSOCDEVEL from "./Pic/ASSPCIATIONDESFEMMESDEVEL.png";
import tirezenmauve from "./Pic/tirezenmauve.png";
import letoilemauve from "./Pic/letoilemauve.png";
import associationjoussour from "./Pic/associationjoussour.png";
import associationalternatif from "./Pic/associationalternatif.png";
import lestartgauche from "./Pic/lestartgauche.png";
import lestartdroite from "./Pic/lestartdroite.png";
import lalignedeselectrice from "./Pic/lalignedeselectrice.png";
import associationrayhanejandouba from "./Pic/associationrayhanejandouba.png";
import associationdurable from "./Pic/ASSOCIATIONDURABLEDELA.png";
import letoilejaunnedroite from "./Pic/letoilejaunnedroite.png";
import letoilegauche from "./Pic/letoilejaunnegauche.png";
import associatiopromotion from "./Pic/associatiopromotion.png";
import associationdesjeunnee from "./Pic/associationdesjeunnee.png";
import aswatnisa from "./Pic/aswatnisa.png";
import pointvertegauche from "./Pic/pointvertegauche.png";
import actif from "./Pic/Actif.png";
import pointvertdroite from "./Pic/pointvertdroite.png";
import beity from "./Pic/Beity.png";
import associationvision from "./Pic/associationvision.png";

const Section10 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durée de l'animation
      once: false,    // Permet de déclencher l'animation à chaque scroll
      mirror: true,   // L'animation se déclenche lors du scroll vers le haut et vers le bas
    });
  }, []);

  return (
    <div className="section10">
      <img src={backligne} alt="backligne" className="backligne" data-aos="fade-in" />
      <img src={debutpage} alt="Début de page" className="debutpage" data-aos="fade-up" data-aos-delay="100" />
      <img src={atfd} alt="ATFD" className="atfd" data-aos="fade-left" data-aos-delay="200" />
      <img src={addci} alt="ADDCI" className="addci" data-aos="fade-right" data-aos-delay="300" />
      <img src={atac} alt="ATAC" className="atac" data-aos="fade-up" data-aos-delay="400" />
      <img src={rayhana} alt="Rayhana" className="rayhana" data-aos="zoom-in" data-aos-delay="500" />
      <img src={amal} alt="Amal" className="amal" data-aos="flip-left" data-aos-delay="600" />
      <img src={ASSOCITIONDESFEMMESPOURLACITOYENNETE} alt="ASSOCIATION DES FEMMES POUR LA CITOYENNETÉ" className="association-citoyennete" data-aos="flip-right" data-aos-delay="700" />
      <img src={cawtar} alt="Cawtar" className="cawtar" data-aos="fade-up" data-aos-delay="800" />
      <img src={essabil} alt="Essabil" className="essabil" data-aos="fade-down" data-aos-delay="900" />
      <img src={tigar} alt="Tigar" className="tigar" data-aos="zoom-in-up" data-aos-delay="1000" />
      <img src={calm} alt="Calm" className="calm" data-aos="zoom-out-down" data-aos-delay="1100" />
      <img src={circul1_2} alt="Circul 1/2" className="circul1_2" data-aos="fade-in" data-aos-delay="1200" />
      <img src={ASSOCDEVEL} alt="ASSOCDEVEL" className="assocdevel" data-aos="flip-up" data-aos-delay="1300" />
      <img src={tirezenmauve} alt="Tirez en Mauve" className="tirezenmauve" data-aos="fade-left" data-aos-delay="1400" />
      <img src={letoilemauve} alt="L'étoile Mauve" className="letoilemauve" data-aos="fade-right" data-aos-delay="1500" />
      <img src={associationjoussour} alt="Association Joussour" className="association-joussour" data-aos="fade-up" data-aos-delay="1600" />
      <img src={associationalternatif} alt="Association Alternatif" className="association-alternatif" data-aos="zoom-in" data-aos-delay="1700" />
      <img src={lestartgauche} alt="L'étoile Gauche" className="lestartgauche" data-aos="zoom-out" data-aos-delay="1800" />
      <img src={lestartdroite} alt="L'étoile Droite" className="lestartdroite" data-aos="fade-up" data-aos-delay="1900" />
      <img src={lalignedeselectrice} alt="La Ligne des Électrices" className="lalignedeselectrice" data-aos="fade-down" data-aos-delay="2000" />
      <img src={associationrayhanejandouba} alt="Association Rayhana Jandouba" className="association-rayhana-jandouba" data-aos="flip-left" data-aos-delay="2100" />
      <img src={associationdurable} alt="Association Durable" className="association-durable" data-aos="flip-right" data-aos-delay="2200" />
      <img src={letoilejaunnedroite} alt="L'étoile Jaune Droite" className="letoilejaunnedroite" data-aos="fade-up" data-aos-delay="2300" />
      <img src={letoilegauche} alt="L'étoile Gauche" className="letoilegauche" data-aos="fade-down" data-aos-delay="2400" />
      <img src={associatiopromotion} alt="Association Promotion" className="associatiopromotion" data-aos="fade-left" data-aos-delay="2500" />
      <img src={associationdesjeunnee} alt="Association des Jeunnee" className="associationdesjeunnee" data-aos="fade-right" data-aos-delay="2600" />
      <img src={aswatnisa} alt="Aswat Nisa" className="aswatnisa" data-aos="fade-up" data-aos-delay="2700" />
      <img src={pointvertegauche} alt="Point Vert Gauche" className="pointvertegauche" data-aos="fade-down" data-aos-delay="2800" />
      <img src={actif} alt="Actif" className="actif" data-aos="zoom-in" data-aos-delay="2900" />
      <img src={pointvertdroite} alt="Point Vert Droite" className="pointvertdroite" data-aos="zoom-out" data-aos-delay="3000" />
      <img src={beity} alt="Beity" className="beity" data-aos="fade-up" data-aos-delay="3100" />
      <img src={associationvision} alt="Association Vision" className="associationvision" data-aos="fade-down" data-aos-delay="3200" />
    </div>
  );
};

export default Section10;
