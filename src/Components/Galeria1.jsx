import React from "react";
import { Carousel } from "react-bootstrap";
import Img from "react-cool-img";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const galeria1 = importAll(
  require.context("../assets/galeria_1", false, /\.(png|jpe?g|svg)$/)
);

const Galeria = () => {
  return (
    <>
      <Carousel>
        {Object.entries(galeria1).map((t, k) =>
          Object.entries(t[1]).map((t, k) => (
            <Carousel.Item key={k}>
              <Img
                className="d-block w-100"
                src={t[1]}
                alt="imagens_da_galeria_principal"
                webp='True'
              />
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </>
  );
};

export default Galeria;
