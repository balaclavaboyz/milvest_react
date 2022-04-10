import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';

const urlendpoint="https://ik.imagekit.io/z32cydzahxp/"

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const galeria1 = importAll(
  require.context("../assets/galeria_1", false, /\.(png|jpe?g|svg|webp)$/)
);


const Galeria = () => {
  return (
    <>
    {/*  */}
    <IKContext urlEndpoint={urlendpoint}>
    <IKImage path="galeria_1_milvest_react/IMG_5515_w6EF3SH6es.jpg" width="400"></IKImage>
    </IKContext>
    {/*  */}
      <Carousel>
        {
        Object.entries(galeria1).map((t, k) =>
          Object.entries(t[1]).map((t, k) => (
            <Carousel.Item key={k}>
              <Image
                className="d-block w-100"
                src={t[1]}
                alt="imagens_da_galeria_principal"
              />
            </Carousel.Item>
          ))
        )
        }
      </Carousel>
    </>
  );
};

export default Galeria;
