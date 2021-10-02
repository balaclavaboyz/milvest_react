import React from "react";
import ReactGA from 'react-ga';
import logo from '../assets/logo.svg'
ReactGA.initialize('UA-170028058-4');

const Header = () => {
  
  return (
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>
        Milvest Atacado Bom Retiro | Vestidos e Roupas Qualidade Atacado
      </title>
      <meta
        name="description"
        content="Criamos, Produzimos e Vendemos em Atacado. Loja em Bom Retiro, rua aimores 101. Site institucional da Milvest."
      />
      <meta
        name="keywords"
        content="Milvest, bomretiro, bom retiro, atacado, aimores, vestido, vestidos, blusa, calca, calça, saia, milvest, instagram, whatsapp, outono, inverno, 2021, catálogo, catalogo, moda, qualidade, roupa, rua aimores atacado, rua aimores, vestido rua aimores, vestido atacado"
      />
      <meta name="author" content="Peter Kim" />
      <link rel="icon" href={logo} type="image/icon type"/>
    </head>
  );
};

export default Header;
