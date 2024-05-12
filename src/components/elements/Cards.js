import React from "react";
import Card from "react-bootstrap/Card";
import ButtonA from "./ButtonA";
import styles from "./Cards.module.css";

function Cards() {
  return (
    <section className="container-fluid">
      <div className="row">
        {/* Primeiro Card */}
        <div className="d-flex justify-content-center col-md-6 mb-4">
          {" "}
          {/* Para telas médias (>= 768px), ocupará metade da largura */}
          <Card className={styles.cards}>
            <Card.Img
              style={{ width: "95%", margin:"5px",height: "180px", borderRadius:"6px", objectFit: "cover" }}
              className="img-fluid mx-auto"
              variant="top"
              src={require("../../image/projects/ConsumoAPI.png")}
            />
            <Card.Body>
              <Card.Title className={styles.title}>Projeto 1</Card.Title>
              <Card.Text className={styles.text}>
                Este repositório contém um projeto desenvolvido como parte do
                curso "Formação em Tecnologia" pela DNC, envolvendo uma
                aplicação web que consome APIs para obter informações utilizando
                CEPs e coordenadas geográficas.
              </Card.Text>
              <div className={styles.heightBut}>
                <ButtonA
                  className="mt-auto"
                  link="https://github.com/XanRover/Desafio2_DncWeather"
                  text="Clique aqui"
                />
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Segundo Card */}
        <div className="d-flex justify-content-center col-md-6 mb-4">
          {" "}
          {/* Para telas médias (>= 768px), ocupará metade da largura */}
          <Card className={styles.cards}>
            <Card.Img
              style={{ width: "95%", margin:"5px",height: "180px", borderRadius:"6px", objectFit: "cover" }}
              className="img-fluid mx-auto"
              variant="top"
              src={require("../../image/projects/Portfolio.png")}
            />
            <Card.Body>
              <Card.Title className={styles.title}>Projeto 2</Card.Title>
              <Card.Text className={styles.text}>
                Este repositório contém o meu portfólio, onde você pode conhecer
                um pouco mais sobre mim e explorar os projetos que desenvolvi. O
                portfólio foi criado utilizando as tecnologias HTML, CSS e
                JavaScript.
              </Card.Text>
              <div className={styles.heightBut}>
                <ButtonA
                  className="mt-auto"
                  link="https://github.com/XanRover/Portifolio-Front-End"
                  text="Clique aqui"
                />
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Terceiro Card */}
        <div className="d-flex justify-content-center col-md-6 mb-4">
          {" "}
          {/* Para telas médias (>= 768px), ocupará metade da largura */}
          <Card className={styles.cards}>
            <Card.Img
              style={{ width: "95%", margin:"5px",height: "180px", borderRadius:"6px", objectFit: "cover" }}
              className="img-fluid mx-auto"
              variant="top"
              src={require("../../image/projects/ProjetoMARIO.png")}
            />
            <Card.Body>
              <Card.Title className={styles.title}>Projeto 3</Card.Title>
              <Card.Text className={styles.text}>
                Desenvolvimento de uma página inspirada no Super Mario Bros em
                formato de card de stream com trailer e botões interativos.
              </Card.Text>
              <div className={styles.heightBut}>
                <ButtonA
                  className="mt-auto"
                  link="https://github.com/XanRover/Projeto-Super-Mario-Bros"
                  text="Clique aqui"
                />
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Quarto Card */}
        <div className="d-flex justify-content-center col-md-6 mb-4">
          {" "}
          {/* Para telas médias (>= 768px), ocupará metade da largura */}
          <Card className={styles.cards}>
            <Card.Img
              style={{ width: "95%", margin:"5px",height: "180px", borderRadius:"6px", objectFit: "cover" }}
              className="img-fluid mx-auto"
              variant="top"
              src={require("../../image/projects/PortfolioAtleta.png")}
            />
            <Card.Body>
              <Card.Title className={styles.title}>Projeto 4</Card.Title>
              <Card.Text className={styles.text}>
                O Projeto Portfolio ATLETA é um portfólio online desenvolvido
                com HTML, CSS e JavaScript para destacar a carreira de um
                atleta.
              </Card.Text>
              <div className={styles.heightBut}>
                <ButtonA
                  className="mt-auto"
                  link="https://github.com/XanRover/Portif-lio-Front-End---ATLETA"
                  text="Clique aqui"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Cards;
