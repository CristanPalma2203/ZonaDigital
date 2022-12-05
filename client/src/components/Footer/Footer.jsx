import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categorías más populares</h1>
          <span>Unidades SSD M.2</span>
          <span>Tarjetas de Video</span>
          <span>Celulares y Tablets</span>
          <span>TV Streaming</span>
          <span>Memorias RAM Arrivals</span>
          <span>Headsets para Gamers</span>
          <span>Gaming Goodies</span>
        </div>
        <div className="item">
          <h1>Avisos y Políticas</h1>
          <span>Aviso de Seguridad</span>
          <span>Aviso de Marca</span>
          <span>Privacidad</span>
          <span>Garantia RMA</span>
          <span>Delivery info</span>
        </div>
        <div className="item">
          <h1>Sobre Nosotros</h1>
          <span>Empleos</span>
          <span>Historia</span>
          <span>Sucursales</span>
          <span>Servicios</span>
          <span>Contacto</span>
        </div>
        
      </div> 
      <div className="bottom">
        <div className="left">
          <span className="logo"><img src="https://www.zonadigitalsv.com/assets/media/logos/logozdweb.png" alt="" srcset="" width={"150px"} /></span>
          <span className="copyright">
          Copyright © 2023 Zona Digital El Salvador . Todos los derechos reservados.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.jpg" alt="" />
  
        </div>
      </div>
    </div>
  );
};

export default Footer;
