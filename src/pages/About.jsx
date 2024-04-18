import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import imgRestaurant from "../assets/img/japanese-restaurant.png";
import '../assets/styles/about.css'

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} className="text-left">
            <p>
              Bienvenue à Sushi Sea, une oasis de saveurs japonaises
              authentiques au cœur de la ville. Niché discrètement dans un
              quartier pittoresque, notre restaurant offre <span className="bold">une expérience
              culinaire inoubliable</span> pour les amateurs de cuisine japonaise
              traditionnelle.
            </p>

            <p>
              Depuis notre ouverture, nous nous sommes engagés à capturer
              l'essence même de la gastronomie japonaise à travers une sélection
              méticuleuse des <span className="bold">meilleurs ingrédients</span>, un <span className="bold">savoir-faire artisanal</span> et un <span className="bold">service impeccable</span>.
            </p>

            <p>
              Notre menu, conçu avec passion par nos chefs expérimentés, met en
              valeur une variété de délices culinaires, allant des <span className="bold">sushis
              raffinés aux tempuras croustillantes, en passant par les ramens
              réconfortants et les plats de teppanyaki exquis</span>. Chaque plat est
              préparé avec une attention particulière aux détails et à la
              présentation, garantissant une expérience gustative qui émerveille
              les sens.
            </p>

            <p>
              Chez Sushi Sea, nous croyons en l'importance de préserver les
              traditions culinaires japonaises tout en incorporant une touche
              contemporaine pour satisfaire les palais modernes. Notre ambiance
              chaleureuse et accueillante offre le <span className="bold">cadre idéal</span> pour des repas
              intimes en tête-à-tête, des réunions de famille joyeuses ou des
              rencontres entre amis animées.
            </p>

            <p>
              Nous nous engageons également à offrir un <span className="bold">service attentionné et
              personnalisé</span>  à chacun de nos clients, créant ainsi une atmosphère
              où chaque visite se transforme en une expérience mémorable et
              gratifiante.
            </p>

            <p>
              Que vous soyez un connaisseur de sushi ou un novice curieux, nous
              sommes ravis de vous accueillir chez Sushi Sea pour un <span className="bold">voyage
              culinaire authentique au Japon</span>. Venez vous joindre à nous et
              découvrez la magie de la cuisine japonaise traditionnelle dans
              toute sa splendeur.
            </p>

            <p className="bold">Arigatou gozaimasu et à bientôt chez Sushi Sea !</p>
          </Col>
          <Col xs={4} md={2}>
            <Image className="img-restau" src={imgRestaurant} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
