import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './Comienzo.css';

export default function Comienzo() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.5"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.7], ["20px", "0px"]);

  return (
    <div className="comienzo-section" ref={ref}>
      <div className="comienzo-content-wrapper">
        <div className="comienzo-image-container">
          <img
            src="https://i.imgur.com/z45rdG7.jpeg"
            alt="Fundador de la isla"
            className="comienzo-image"
          />
        </div>
        <motion.div
          className="comienzo-text-container"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          <h2>¿CÓMO COMENZÓ?</h2>
          <p>
            Con un presupuesto limitado, comenzó con una isla de 6m² en el pasillo del Montevideo Shopping. Junto a un amigo estudiante de arquitectura, adaptó su idea de surf shop y abrió su primera tienda el 12 de noviembre de 1999.
          </p>
        </motion.div>
      </div>
    </div>
  );
}