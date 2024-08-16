import React from 'react';
import pic from './Pic/haute.png'; // Chemin vers votre image
import pic2 from './Pic/contact.png'; // Chemin vers votre image
import pic3 from './Pic/ligneV.png'; // Chemin vers la nouvelle image
import additionalImage from './Pic/ligne.png'; // Chemin vers l'image supplémentaire
import bottomImage from './Pic/ligneA.png'; // Chemin vers la nouvelle image en bas
import newBottomImage from './Pic/Femme.png'; // Chemin vers la nouvelle image en bas
import './Cssfile/sectionFinal.css';

const SectionFinal = () => {
    return (
        <div className="full-width-image-container">
            {/* <img src={pic} alt="Full Width" className="full-width-image" /> */}
            <div className="second-image-and-text">
                <img src={pic2} alt="Second Image" className="second-image" />
                <p className="text">
                    +123 456 7890<br />
                    contact@exemple.com<br />
                    123 Main Street, ville, Pays<br />
                    <hr className="custom-line" />
                    politique de confidentialité<br />
                    Conditions d'utilisation
                </p>
            </div>
            <div className="third-image-container">
                <img src={additionalImage} alt="Additional Image" className="additional-image" />
                <img src={pic3} alt="Third Image" className="third-image" />
            </div>
            <div className="bottom-image-container">
                <img src={bottomImage} alt="Bottom Image" className="bottom-image" />
            </div>
            <div className="new-bottom-image-container">
                <img src={newBottomImage} alt="New Bottom Image" className="new-bottom-image" />
            </div>
        </div>
    );
};

export default SectionFinal;