import React from "react";
import Timeline from "../elements/Timeline";

function Aboutme() {
  const events = [""];
  return (
    <main className="container" id="aboutme">
      <h1 className="text-start m-5">Sobre mim</h1>
      <Timeline events={events} />
    </main>
  );
}

export default Aboutme;
