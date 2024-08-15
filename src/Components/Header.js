import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cssfile/HeaderSection.css'; 
import backgroundImage from './Pic/banner background.png'; 
import womenFaces from './Pic/portraits_Plan de travail 1 copie 6.png'; 
import image1baguettejaunne from './Pic/Groupe 134.png';
import image2deuxcote from './Pic/,,.png';
import image3points3 from './Pic/….png';
import image4bagettever from './Pic/Groupe 145.png';
import image5serpon from './Pic/Groupe 25.png';
import ellesImage from './Pic/Elles   étaient.png'; 
import uneImage from './Pic/Une      fois.png'; 

gsap.registerPlugin(ScrollTrigger);

const HeaderSection = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 767;

    if (isMobile) {
      // Mobile animation setup remains unchanged
      gsap.set('.main-face-image', { opacity: 0, scale: 0.8, y: 100 });
      gsap.set('.elles, .une', { opacity: 0 });
      
      gsap.timeline()
        .to('.elles, .une', { opacity: 1, duration: 1, delay: 0.5 })
        .to('.main-face-image', { opacity: 1, duration: 1 })
        .to('.main-face-image', { scale: 1.2, y: 0, duration: 1, ease: 'power2.out' }) // Added 'y: 0' for upward animation
        .to('.main-face-image', {
          clipPath: 'inset(0% 0% 0% 50%)',
          duration: 1,
          ease: 'power2.out',
        })
        .to('.main-face-image', {
          clipPath: 'inset(0% 50% 0% 0%)',
          duration: 1,
          ease: 'power2.out',
        });

      // Scroll-triggered animation
      gsap.to('.elles, .une', {
        scrollTrigger: {
          trigger: '.header-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          markers: false,
          onUpdate: (self) => {
            if (self.direction === -1) { // Scroll up
              gsap.to('.main-face-image', { scale: 1.1, ease: 'power2.out' });
            } else { // Scroll down
              gsap.to('.main-face-image', { scale: 1.3, ease: 'power2.out' });
            }
          }
        }
      });
      
    } else {
      // Animation for desktop
      gsap.timeline()
        .fromTo('.main-face-image', 
          { y: 200, opacity: 0 }, // Start from below with no opacity
          { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' } // Smooth upward motion
        )
        .to('.main-face-image', {
          clipPath: 'inset(0% 0% 0% 50%)',
          duration: 1.5,
          ease: 'power2.out',
        })
        .to('.main-face-image', {
          clipPath: 'inset(0% 50% 0% 0%)',
          duration: 1.5,
          ease: 'power2.out',
        })
        .to('.main-face-image', {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: 'power2.out',
        });

      const images = ['.image1', '.image2', '.image3', '.image4', '.image5'];
      images.forEach((image, index) => {
        gsap.fromTo(
          image,
          { opacity: 0, x: index % 2 === 0 ? -200 : 200 }, 
          {
            opacity: 1,
            x: 0,
            duration: 2 + index * 0.5, 
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
    }
  }, []);

  return (
    <header className="header-section">
      <div className="header-bg">
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="header-content">
        <div className="left-text">
          <div className="text-group">
            <img src={ellesImage} alt="Elles" className="left-text" />
          </div>
        </div>
        <div className="right-text">
          <div className="right-text">
            <div className="une_right">
              <img src={uneImage} alt="une" className="right-text" />
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
        <img src={image1baguettejaunne} alt="Image 1" className="extra-image image1" />
        <img src={image2deuxcote} alt="Image 2" className="extra-image image2" />
        <img src={image3points3} alt="Image 3" className="extra-image image3" />
        <img src={image4bagettever} alt="Image 4" className="extra-image image4" />
        <img src={image5serpon} alt="Image 5" className="extra-image image5" />
        
      </div>
    </header>
  );
};

export default HeaderSection;
