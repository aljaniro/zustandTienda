import React from "react";
import "../css/about.css";
import lau from "../asset/laury.jpg";

function About() {
  return (
    <div className="container2">
      <h1>SOBRE MI</h1>
      <section className="about_me">
      
      
      <div className="info">
        <h1>lAURY MODA</h1>
        <span>
          Es una chica muy alegre,dulce y de un gran corazon. le gusta el
          anime,los helados con fresas y el cine ademas de bailar, se tira sus
          pases prohibidos. Es una gran enfermera que aunque le toca duro
          nunca se rinde y afronta su labor con todas sus fuerzas y le gusta
          mucho dormir, estar en modo bella durmiente es lo q le gusta ademas
          de ir al gym pero porque se prepara para los carnavales. En resumen
          es una gran mujer con una sonrisa que encanta y una personalidad que
          fascina
        </span>
      </div>
      <div className="foto">
        <img src={lau} alt="" className="foto1"></img>
      </div>
   
  </section>
    </div>
    
  );
}

export default About;
