import React from "react";
import "./Cssfile/Section10.css";
import Groupe_de_masque1 from "./Pic/Groupe de masques 1.png";
import atfd from "./Pic/Atfd.png";
import addci from "./Pic/addci.png";
import atac from "./Pic/Atac.png";
import rayhana from "./Pic/Rayhana.png";
import amal from "./Pic/Amal.png";
import Association from "./Pic/Association des Femmes Pour la Citoyenneté et le Développement  AFPCD  Babouche Ain Draham  Jendouba.png";
import cawter from "./Pic/Cawtar.png";
import essabil from "./Pic/Essabil.png";
import tigar from "./Pic/Tigar.png";
import calam from "./Pic/Calam.png";
import Association2 from "./Pic/Association des femmes pour le développement et l’égalité AFDE Douz (Tataouine).png";
import Association3 from "./Pic/Association Joussour pour la Citoyenneté Le Kef.png";
import Association4 from "./Pic/Association du développement alternatif « Attanmia albadila » (Tataouine).png";
import laligue from "./Pic/La Ligue des Electrices Tunisiennes LET Nabeul et Jendouba.png";
import Association5 from "./Pic/Association Rayhana Jendouba.png";
import Association6 from "./Pic/Association du Développement Durable et de la Coopération Internationale ADDCI Zarzis.png";
import Association7 from "./Pic/Association pour la promotion du Droit à la Différence Bizerte.png";
import Association8 from "./Pic/Association des jeunes au service des femmes Kasserine.png";
import asswat from "./Pic/Aswat Nissa.png";
import actif from "./Pic/Actif.png";
import biety from "./Pic/Beity.png";
import groupe356 from "./Pic/Groupe 367.png";
import Groupe364 from "./Pic/Groupe 364.png";

import Association9 from "./Pic/Association Vision pour la citoyenneté et le développement durable kébili.png";
// import Groupe364 from "./Pic/Groupe 364.png";
// import rectangle from "./Pic/Rectangle 268.png";
import pt from "./Pic/Ellipse 15.png";
const Section10 = () => {
  return (
    <div className="section10">
      <div className="single-row">
        <img
          src={Groupe_de_masque1}
          alt="Groupe Masques 1"
          className="groupe-masques1"
        />
      </div>

      <div className="group-row">
        <img src={atfd} alt="ATFD" className="atfd" />
        <img src={addci} alt="ADDCI" className="addci" />
        <img src={atac} alt="ATAC" className="atac" />
        <img src={rayhana} alt="Rayhana" className="rayhana" />
        <img src={amal} alt="Amal" className="amal" />
      </div>

      <div className="single-roww">
        <img src={Association} alt="Association" className="association-wide" />
      </div>

      <div className="small-images-row">
        <img src={cawter} alt="Cawter" className="cawter" />
        <img src={essabil} alt="Essabil" className="essabil" />
        <img src={tigar} alt="Tigar" className="tigar" />
        <img src={calam} alt="Calam" className="calam" />
      </div>

      <div className="container">
        <div className="association-container">
          <div className="association-item" id="assoc2">
            <img
              src={Association2}
              alt="Association2"
              className="association-wide"
            />
          </div>
          <div className="association-item" id="assoc3">
            <img
              src={Association3}
              alt="Association3"
              className="association-wide"
            />
          </div>
          <div className="association-item" id="assoc4">
            <img
              src={Association4}
              alt="Association4"
              className="association-wide"
            />
            <img src={Groupe364} alt="Left Corner" className="left-corner" />
            <img src={Groupe364} alt="Right Corner" className="right-corner" />
          </div>
          <div className="association-item" id="ligue">
            <img src={laligue} alt="Laligue" className="association-wide" />
          </div>
          <div className="association-item" id="assoc5">
            <img
              src={Association5}
              alt="Association5"
              className="association-wide"
            />
          </div>
          <div className="association-item" id="assoc6">
            <img
              src={Association6}
              alt="Association6"
              className="association-small"
            />
            <img src={groupe356} alt="Left Corner" className="left-corner" />
            <img src={groupe356} alt="Right Corner" className="right-corner" />
          </div>
          <div className="association-item" id="assoc7">
            <img
              src={Association7}
              alt="Association7"
              className="association-small"
            />
          </div>
          <div className="association-item" id="assoc8">
            <img
              src={Association8}
              alt="Association8"
              className="association-small"
            />
          </div>
          <div className="small-images-row2">
            <img src={asswat} alt="Asswat" className="asswat" />
            <img src={pt} alt="pt" className="pt" />
            <img src={actif} alt="Actif" className="actif" />
            <img src={pt} alt="pt" className="pt" />
            <img src={biety} alt="Biety" className="biety" />
          </div>
        </div>
        <div className="single-row" id="assoc9">
        <img src={Association9} alt="Association9" />
      </div>
      </div>
     
    </div>
  );
};

export default Section10;
