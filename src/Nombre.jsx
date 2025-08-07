"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Nombre() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.8"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      <img
        src="https://i.imgur.com/fYObP90.jpeg"
        alt="Local La Isla"
        style={{
          display: "block",
          maxWidth: "100%",
          height: "auto",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "80%",
          zIndex: "1",
          color: "white",
          padding: "1rem",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: textOpacity,
        }}
      >
        <h1
          style={{
            fontFamily: "Gliker",
            margin: "0 0 0.5rem 0",
            fontSize: "2.5rem",
            lineHeight: "1.2",
          }}
        >
          ¿POR QUÉ SU NOMBRE?
        </h1>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "1rem",
            lineHeight: "1.5",
            margin: "0 0 1.5rem 0",
            maxWidth: "600px",
          }}
        >
          Aquella tiendita dio paso a su nombre ya que, al construirla, tanto él como los amigos que lo ayudaron, se referían a ella como "La isla”. Con los años el equipo de LA ISLA fue creciendo y sus locales se fueron multiplicando y ampliando.
        </p>

        <button
          style={{
            backgroundColor: "#808080",
            opacity: "60%",
            color: "#ffffff",
            fontFamily: "sans-serif",
            fontSize: "1.1rem",
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            transition: "background-color 0.3s ease",
          }}
        >
          Ver locales
        </button>
      </motion.div>
    </div>
  );
}

export default Nombre;