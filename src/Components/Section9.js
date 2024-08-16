import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/Section9.css';

// Importation des images
import imgBackgrounds9 from './Pic/backgrounds9.png';
import imgDeuxCote from './Pic/deuxcote.png';
import imgHistoire from './Pic/Histoire.png';
import imgBackgroundHistoire from './Pic/backgroundhistoir.png';
import imgBoiteDialogue from './Pic/boitediagloge.png';
import imgLalune from './Pic/lalune.png';
import imgDeReussite from './Pic/dereussite.png';
import imgDeuxCoteInverse from './Pic/deuxcoteinverse.png';
import imgDialogueTransparente from './Pic/diaglogetransparente.png';
import imgRectangleBlanc from './Pic/rectongleblanc.png';
import imgVisionKebili from './Pic/visionkebili.png';
import imgFlecheBlanc from './Pic/leflecheblanc.png';
import imgFemmeImgGauche from './Pic/femmeimggauche.png';
import imgLigneMauve from './Pic/lignemauve.png';
import imgTextElles from './Pic/textellesesontmises.png';
import imgEmpowerment from './Pic/lempowerment.png';
import imgBagetteMauve from './Pic/bagettemauve.png';
import imgDateAssociation from './Pic/dateassociation.png';
import imgAvecSonPartenaire from './Pic/avecsonpartenaire.png';
import imgLeCoursPassport from './Pic/lecourspassport.png';
import imgParConsequent from './Pic/parconsquent.png';
import imgBackgroundTextProjet from './Pic/backgroundtextprojet.png';
import imgLesProjetVisant from './Pic/lesprojetvisant.png';
import imgCetteApprocheBasse from './Pic/cetteaprochebasse.png';
import imgLes3Fleurs from './Pic/les3fleurs.png';
import imgEstNovatrice from './Pic/estnovatrice.png';
import imgSolutionFacile from './Pic/solutionfacile.png';
import imgParagrapheVisionKebili from './Pic/paragraphevisionkebili.png';
import imgLigneBlanc2 from './Pic/ligneblanc2.png';
import imgCetteApproche from './Pic/cetteaproche.png';
import imgFeministe22 from './Pic/feministe22.png';
import imgIntersectionnelle from './Pic/intersectionnelle.png';
import imgSansPourAutant from './Pic/sanspourautant.png';
import imgMeriteAmplement from './Pic/meriteamplement.png';

gsap.registerPlugin(ScrollTrigger);

const Section9 = () => {
  useEffect(() => {
    // Initialisation de AOS
    AOS.init({
      duration: 1200,
    });

    // Animation GSAP pour les éléments spécifiques
    gsap.fromTo(
      '.imgLalune',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section9',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.imgDeuxCoteInverse',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section9',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section9">
      <img src={imgBackgrounds9} alt="Background" className="imgBackgrounds9" />
      <img 
        src={imgDeuxCote} 
        alt="Deux Cote" 
        className="imgDeuxCote" 
        data-aos="fade-up" 
        data-aos-delay="0" 
      />
      <img 
        src={imgHistoire} 
        alt="Histoire" 
        className="imgHistoire" 
        data-aos="fade-up" 
        data-aos-delay="500" 
      />
      <img 
        src={imgBackgroundHistoire} 
        alt="Background Histoire" 
        className="imgBackgroundHistoire" 
        data-aos="fade-up" 
        data-aos-delay="1000" 
      />
      <img 
        src={imgBoiteDialogue} 
        alt="Boite Dialogue" 
        className="imgBoiteDialogue" 
        data-aos="fade-up" 
        data-aos-delay="1500" 
      />
      <img 
        src={imgLalune} 
        alt="Lune" 
        className="imglaLune" 
      />
      <img 
        src={imgDeReussite} 
        alt="De Reussite" 
        className="imgDeReussite" 
        data-aos="fade-up" 
        data-aos-delay="2000" 
      />
      <img 
        src={imgDeuxCoteInverse} 
        alt="Deux Cote Inverse" 
        className="imgDeuxCoteInverse" 
      />
      <img 
        src={imgDialogueTransparente} 
        alt="Dialogue Transparente" 
        className="imgDialogueTransparente" 
        data-aos="fade-up" 
        data-aos-delay="2500" 
      />
      <img 
        src={imgRectangleBlanc} 
        alt="Rectangle Blanc" 
        className="imgRectangleBlanc" 
        data-aos="fade-up" 
        data-aos-delay="3000" 
      />
      <img 
        src={imgVisionKebili} 
        alt="Vision Kebili" 
        className="imgVisionKebili" 
        data-aos="fade-up" 
        data-aos-delay="3500" 
      />
      <img 
        src={imgFlecheBlanc} 
        alt="Fleche Blanc" 
        className="imgFlecheBlanc" 
        data-aos="fade-up" 
        data-aos-delay="4000" 
      />
      <img 
        src={imgFemmeImgGauche} 
        alt="Femme Gauche" 
        className="imgFemmeImgGauche" 
        data-aos="fade-up" 
        data-aos-delay="4500" 
      />
      <img 
        src={imgLigneMauve} 
        alt="Ligne Mauve" 
        className="imgLigneMauve" 
        data-aos="fade-up" 
        data-aos-delay="5000" 
      />
      <img 
        src={imgTextElles} 
        alt="Text Elles Se Sont Mises" 
        className="imgTextElles" 
        data-aos="fade-up" 
        data-aos-delay="5500" 
      />
      <img 
        src={imgEmpowerment} 
        alt="Empowerment" 
        className="imgEmpowerment" 
        data-aos="fade-up" 
        data-aos-delay="6000" 
      />
      <img 
        src={imgBagetteMauve} 
        alt="Bagette Mauve" 
        className="imgBagetteMauve" 
        data-aos="fade-up" 
        data-aos-delay="6500" 
      />
      <img 
        src={imgDateAssociation} 
        alt="Date Association" 
        className="imgDateAssociation" 
        data-aos="fade-up" 
        data-aos-delay="7000" 
      />
      <img 
        src={imgAvecSonPartenaire} 
        alt="Avec Son Partenaire" 
        className="imgAvecSonPartenaire" 
        data-aos="fade-up" 
        data-aos-delay="7500" 
      />
      <img 
        src={imgLeCoursPassport} 
        alt="Le Cours Passport" 
        className="imgLeCoursPassport" 
        data-aos="fade-up" 
        data-aos-delay="8000" 
      />
      <img 
        src={imgParConsequent} 
        alt="Par Consequent" 
        className="imgParConsequent" 
        data-aos="fade-up" 
        data-aos-delay="8500" 
      />
      <img 
        src={imgBackgroundTextProjet} 
        alt="Background Text Projet" 
        className="imgBackgroundTextProjet" 
        data-aos="fade-up" 
        data-aos-delay="9000" 
      />
      <img 
        src={imgLesProjetVisant} 
        alt="Les Projet Visant" 
        className="imgLesProjetVisant" 
        data-aos="fade-up" 
        data-aos-delay="9500" 
      />
      <img 
        src={imgCetteApprocheBasse} 
        alt="Cette Approche Basse" 
        className="imgCetteApprocheBasse" 
        data-aos="fade-up" 
        data-aos-delay="10000" 
      />
      <img 
        src={imgLes3Fleurs} 
        alt="Les 3 Fleurs" 
        className="imgLes3Fleurs" 
        data-aos="fade-up" 
        data-aos-delay="10500" 
      />
      <img 
        src={imgEstNovatrice} 
        alt="Est Novatrice" 
        className="imgEstNovatrice" 
        data-aos="fade-up" 
        data-aos-delay="11000" 
      />
      <img 
        src={imgSolutionFacile} 
        alt="Solution Facile" 
        className="imgSolutionFacile" 
        data-aos="fade-up" 
        data-aos-delay="11500" 
      />
      <img 
        src={imgParagrapheVisionKebili} 
        alt="Paragraphe Vision Kebili" 
        className="imgParagrapheVisionKebili" 
        data-aos="fade-up" 
        data-aos-delay="12000" 
      />
      <img 
        src={imgLigneBlanc2} 
        alt="Ligne Blanc 2" 
        className="imgLigneBlanc2" 
        data-aos="fade-up" 
        data-aos-delay="12500" 
      />
      <img 
        src={imgCetteApproche} 
        alt="Cette Approche" 
        className="imgCetteApproche" 
        data-aos="fade-up" 
        data-aos-delay="13000" 
      />
      <img 
        src={imgFeministe22} 
        alt="Feministe 22" 
        className="imgFeministe22" 
        data-aos="fade-up" 
        data-aos-delay="13500" 
      />
      <img 
        src={imgIntersectionnelle} 
        alt="Intersectionnelle" 
        className="imgIntersectionnelle" 
        data-aos="fade-up" 
        data-aos-delay="14000" 
      />
      <img 
        src={imgSansPourAutant} 
        alt="Sans Pour Autant" 
        className="imgSansPourAutant" 
        data-aos="fade-up" 
        data-aos-delay="14500" 
      />
      <img 
        src={imgMeriteAmplement} 
        alt="Merite Amplement" 
        className="imgMeriteAmplement" 
        data-aos="fade-up" 
        data-aos-delay="15000" 
      />
    </section>
  );
};

export default Section9;
