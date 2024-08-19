import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic2 from './Pic/contact.png'; // Chemin vers l'image de contact
import pic3 from './Pic/ligneV.png'; // Chemin vers la nouvelle image
import additionalImage from './Pic/ligne.png'; // Chemin vers l'image supplémentaire
import bottomImage from './Pic/ligneA.png'; // Chemin vers l'image en bas
import newBottomImage from './Pic/Femme.png'; // Chemin vers l'image en bas
import imghautepage from './Pic/hauteimg.png'; // Image en haut de la page
import boitedialogueverte from './Pic/boitedialogueverte.png'; // Image de boîte de dialogue verte
import customLineImage from './Pic/customLineImage.png'; // Image pour remplacer la ligne
import sectionfinalbackground from './Pic/sectionfinalbackground.png'; // Image pour le fond de la section
import './Cssfile/sectionFinal.css';

const SectionFinal = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="section-final">
            {/* Image de fond de la section */}
            <div className="section-background">
                <img src={sectionfinalbackground} alt="Background Section" className="background-imagesfinal"  />
            </div>

            <img src={imghautepage} alt="Image en Haut" className="image-haut-page"  />

            <div className="boite-dialogue-container">
                <img src={boitedialogueverte} alt="Boîte Dialogue Verte" className="boite-dialogue-verte" data-aos="fade-right" />
            </div>
            
            <div className="contact-container">
                <img src={pic2} alt="Second Image" className="second-image" data-aos="fade-left" />
                <p className="text" data-aos="fade-up">
                    +123 456 7890<br />
                    contact@exemple.com<br />
                    123 Main Street, ville, Pays<br />
                    <img src={customLineImage} alt="Custom Line" className="custom-line-image" data-aos="zoom-in" />
                    politique de confidentialité<br />
                    Conditions d'utilisation
                </p>
            </div>
            
            <div className="third-image-container">
                <img src={additionalImage} alt="Additional Image" className="additional-image" data-aos="fade-up" />
                <img src={pic3} alt="Third Image" className="third-image" data-aos="fade-down" />
            </div>
            
            <div className="bottom-image-container">
                <img src={bottomImage} alt="Bottom Image" className="bottom-image" data-aos="fade-left" />
            </div>
            
            <div className="new-bottom-image-container">
                <img src={newBottomImage} alt="New Bottom Image" className="new-bottom-image" data-aos="fade-right" />
            </div>
        </div>
    );
};

export default SectionFinal;
