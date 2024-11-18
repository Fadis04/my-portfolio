import React from "react";
import "./certificat.css";
import img1 from "../../assets/fadiDiplome.png";
import img2 from "../../assets/Attestation chef de projet.jpg";
import img3 from "../../assets/Attestation encadrant.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Industrial Biology Engineering Degree",
  },
  {
    id: 2,
    image: img2,
    title: "Certificate of Project Completion",

  },
  {
    id: 3,
    image: img3,
    title: "Certificate of Mentorship",
  },
];

const Certificat = () => {
  return (
    <section id="certificat">
      <h5>What I got</h5>
      <h2>Certificates</h2>

      <div className="container certificat_container">
        {data.map(({ id, image, title, url }) => {
          return (
            <article className="certificat_item" key={id}>
              <div className="certificat_item-image">
                {url !== "" ? (
                  <a href={url} target="_blank" rel="noreferrer">
                    <img src={image} alt={id} />
                  </a>
                ) : (
                  <img src={image} alt={id} />
                )}
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificat;
