import React, { useEffect, useState } from "react";
import styles from "./Presentation.module.css"; // Importe o arquivo de estilo CSS Modules
import ButtonA from "../elements/ButtonA";
import { MdMargin } from "react-icons/md";

function Presentation() {
  const toRotate = ["Gabriel Pedroso", "Atleta de Wushu", "Dev Front-End"];
  const [text, setText] = useState("");
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const period = 100;

  useEffect(() => {
    const ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loop, isDeleting]);

  const toType = () => {
    const i = loop % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  };

  return (
    <section className={styles.Apresent} id="presentation">
      <div className={`${styles.about} container-fluid`}>
        <div className="container">
          <h1 style={{ textAlign: "left" }}>Olá, eu sou {text}</h1>
        </div>
        <div className="container">
          <p>
            Olá! Sou um entusiasta da programação web em busca contínua de
            aprimoramento. Também sou atleta, e minha experiência no esporte me
            trouxe disciplina e comprometimento, valores que aplico no
            desenvolvimento de software. Estou animado com as oportunidades de
            aprendizado e crescimento nesta jornada. Vamos evoluir juntos!
          </p>
          <ButtonA link="https://github.com/XanRover" text="Saber mais" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
