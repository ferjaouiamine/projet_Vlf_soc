import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/HeaderSection.css'; // Vérifiez le chemin relatif
import backgroundImage from './Pic/banner background.png'; // Vérifiez le chemin relatif
import womenFaces from './Pic/portraits_Plan de travail 1 copie 6.png'; // Vérifiez le chemin relatif
import image1 from './Pic/Groupe 134.png';
import image2 from './Pic/,,.png';
import image3 from './Pic/….png';
import image4 from './Pic/Groupe 145.png';
import image5 from './Pic/Groupe 25.png';
import ellesImage from './Pic/Elles   étaient.png'; // Ajoutez le chemin correct
import uneImage from './Pic/Une      fois.png'; // Ajoutez le chemin correct

gsap.registerPlugin(ScrollTrigger);

const HeaderSection = () => {
  useEffect(() => {
    // Animation d'entrée initiale pour chaque image
    const images = ['.image1', '.image2', '.image3', '.image4', '.image5'];
    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 0, x: index % 2 === 0 ? -200 : 200 }, // Animation initiale vers la gauche ou la droite
        {
          opacity: 1,
          x: 0,
          duration: 2 + index * 0.5, // Durée variable pour chaque image
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(image, {
              scrollTrigger: {
                trigger: '.header-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
              x: 0,
              y: 0,
            });
          },
        }
      );
    });

    // Animation de zoom pour l'image principale
    gsap.fromTo(
      '.main-face-image',
      { scale: 1 },
      {
        scale: 1.3,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.header-section',
          start: 'top 50%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <header className="header-section">
      <div className="header-bg">
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="header-content">
        <div className="left-text">
          <div className="text-group">
            <img src={ellesImage} alt="Elles" className="elles" />
          </div>
        </div>
        <div className="right-text">
          <div className="right-text">
            <div className="une_right">
              <img src={uneImage} alt="une" className="une" />
            </div>
          </div>
        </div>
        <div className="image-overlay">
          <img
            src={womenFaces}
            alt="Women Faces"
            className="main-face-image"
          />
        </div>
        {/* Ajout des images supplémentaires */}
        <img src={image1} alt="Image 1" className="extra-image image1" />
        <img src={image2} alt="Image 2" className="extra-image image2" />
        <img src={image3} alt="Image 3" className="extra-image image3" />
        <img src={image4} alt="Image 4" className="extra-image image4" />
        <img src={image5} alt="Image 5" className="extra-image image5" />
      </div>
    </header>
  );
};

export default HeaderSection;
