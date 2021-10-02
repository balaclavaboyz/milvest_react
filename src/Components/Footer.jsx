import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center">
      <Link to='/politica'><a>Política de Privacidade</a></Link>
      <p>
        <i>Criamos , Produzimos e Vendemos em Atacado</i> | R. Aimorés, 101 -
        Bom Retiro, São Paulo - SP, 01122-011 | milvest@milvest.com.br
      </p>
      <p>Desenvolvido por Peter Kim</p>
    </div>
  );
};

export default Footer;
