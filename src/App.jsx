import React from "react";
import ScrollCarousel from "./ScrollCarousel";
import Historia from "./Historia";
import Comienzo from "./Comienzo";
import "./App.css";
import Nombre from "./Nombre";
import IslaCafe from "./IslaCafe";
import Web from "./Web";

export default function App() {
  return (
    <>
      <div>
        <div style={{ height: "200vh", background: "#ffffff" }}>
          <Historia />
        </div>
        <ScrollCarousel />
        <Comienzo />
        <Nombre />
        <IslaCafe />
        <Web />
      </div>
    </>
  );
}