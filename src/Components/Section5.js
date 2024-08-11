import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/Section5.css'; // Assurez-vous que le chemin est correct

// Importez les images nécessaires
import starImage1 from './Pic/star1.png'; 
import starImage2 from './Pic/star2.png'; 
import backgroundImageRight from './Pic/123.png'; 
import fondJaune from './Pic/fondjaune.png'; 

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  useEffect(() => {
    // Animation pour chaque élément de la section 5
    gsap.fromTo('.funds-item', 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.section5-content',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    // Ajoutez l'effet de zoom à l'image de fond à droite
    gsap.fromTo('.background-image-right', 
      { scale: 1 }, 
      { 
        scale: 2.5,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section5',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section5">
      <div className="background-container">
        <img src={starImage1} alt="Star 1" className="star-image star1" />
        <img src={starImage2} alt="Star 2" className="star-image star2" />
        <img src={backgroundImageRight} alt="Background Right" className="background-image-right" />
      </div>
      <div className="section5-content">
        <div className="funds-item">
          <h2 className="funds-title" style={{ backgroundImage: `url(${fondJaune})` }}>Fonds Pluriannuel</h2>
          <p className="funds-description elle-etaient-une-fois">
            Elles étaient une fois des associations tunisiennes qui partageaient leurs expériences et renforçaient leurs structures.
          </p>
          <p className="funds-description autre-phrase">
            Avec ce fonds, elles visent à fortifier la gestion des organisations de défense des droits des femmes (ODDF), assurant ainsi leur pérennité.
          </p>
        </div>

        <div className="funds-item">
          <h2 className="funds-title green-background">Fonds Réactif</h2>
          <p className="funds-description">
            En réponse à des crises, ces associations ont démontré leur résilience en équipant, sensibilisant et formant.
          </p>
          <p className="funds-description autre-phrase">
            Ce fonds réactif booste les réseaux de droits des femmes, influençant les politiques et institutions en Tunisie.
          </p>
        </div>

        <div className="funds-item">
          <h2 className="funds-title red-background">Fonds Innovation</h2>
          <p className="funds-description">
            Ces associations pionnières ont conservé la mémoire féministe, diffusé l’information et encouragé l’entrepreneuriat et l’accès à la justice.
          </p>
          <p className="funds-description autre-phrase">
            Le fonds innovation soutient la défense des droits des femmes pour avancer vers l’égalité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
