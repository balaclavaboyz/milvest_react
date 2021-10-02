import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/flutuante/instagram.svg";
import whats from "../assets/flutuante/whatsapp.svg";
import Img from "react-cool-img";

const Footer = () => {
  const botaoStyleWhatsapp = {
    position: "fixed",
    zIndex: 99,
    bottom: "104px",
    right: "20px",
  };
  const botaoStyleInsta = {
    position: "fixed",
    zIndex: 99,
    bottom: "20px",
    right: "20px",
  };
  return (
    <>
      <div className="text-center">
        <Link to="/politica">
          <a>Política de Privacidade</a>
        </Link>
        <p>
          <i>Criamos , Produzimos e Vendemos em Atacado</i> | R. Aimorés, 101 -
          Bom Retiro, São Paulo - SP, 01122-011 | milvest@milvest.com.br
        </p>
        <p>Desenvolvido por Peter Kim</p>
      </div>
      <a href="https://wa.me/5511942419476" style={botaoStyleWhatsapp}>
        <Img src={whats} alt="whatsapp contato" width="64" height="64"></Img>
      </a>
      <a
        href="https://www.instagram.com/milvest_oficial/"
        style={botaoStyleInsta}
      >
        <Img src={insta} alt="instagram logo" width="64" height="64"></Img>
      </a>
    </>
  );
};

export default Footer;
