import React from "react";
import "../css/encabezado.css";
import image from "../asset/model.png";
import image2 from "../asset/model2.png";
function Encabezado() {
  return (
    <header className="hero">
      <section className="contenido">
        <div style={{marginLeft:"20px"}}>
          <img src={image2} alt=""></img>
        </div>
        <div className="enunciado">
          <h2>BIENVENIDOS A LAURY MODAS</h2>
          <h4>Donde encontraras los mejores contenidos al mejor precio</h4>
          <h6>Te invitamos a unirte</h6>

          <button type="button" class="btn btn-success">
            REGISTRATE
          </button>
        </div>
        <div className="imagen" style={{marginRight:"20px"}}>
          <img src={image} alt=""></img>
        </div>
      </section>
    </header>
  );
}

export default Encabezado;
