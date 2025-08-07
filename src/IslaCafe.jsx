"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import "./IslaCafe.css"

export default function IslaCafe() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const image1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const image2Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const image3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  const x1 = useMotionValue(0)
  const y1 = useMotionValue(0)
  const rotateX1 = useTransform(y1, [-50, 50], [15, -15])
  const rotateY1 = useTransform(x1, [-50, 50], [-15, 15])

  const x2 = useMotionValue(0)
  const y2 = useMotionValue(0)
  const rotateX2 = useTransform(y2, [-50, 50], [15, -15])
  const rotateY2 = useTransform(x2, [-50, 50], [-15, 15])

  const x3 = useMotionValue(0)
  const y3 = useMotionValue(0)
  const rotateX3 = useTransform(y3, [-50, 50], [15, -15])
  const rotateY3 = useTransform(x3, [-50, 50], [-15, 15])

  function handleMouseMove(event, x, y) {
    const rect = event.currentTarget.getBoundingClientRect()
    const posX = event.clientX - rect.left - rect.width / 2
    const posY = event.clientY - rect.top - rect.height / 2
    x.set(posX)
    y.set(posY)
  }

  function handleMouseLeave(x, y) {
    x.set(0)
    y.set(0)
  }

  return (
    <section ref={ref} className="isla-cafe-section">
      <div className="background-layer" />

      <div className="text-container">
        <h1>La Isla Café</h1>
        <p>
          En 2016, inspirados en las cafeterías de California abrimos nuestro
          primer café, respetando el tamaño de la primera islita.
        </p>
      </div>

      <motion.div
        className="polaroid polaroid-1"
        style={{
          y: image1Y,
          left: "10%",
          top: "10%",
          rotateX: rotateX1,
          rotateY: rotateY1,
          rotateZ: -4,
          transformStyle: "preserve-3d",
          perspective: 600,
        }}
        onMouseMove={(e) => handleMouseMove(e, x1, y1)}
        onMouseLeave={() => handleMouseLeave(x1, y1)}
      >
        <img src="https://i.imgur.com/zjZqnoR.png" alt="Imagen 1" />
      </motion.div>

      <motion.div
        className="polaroid polaroid-2"
        style={{
          y: image2Y,
          left: "50%",
          top: "40%",
          rotateX: rotateX2,
          rotateY: rotateY2,
          rotateZ: -8,
          transformStyle: "preserve-3d",
          perspective: 600,
        }}
        onMouseMove={(e) => handleMouseMove(e, x2, y2)}
        onMouseLeave={() => handleMouseLeave(x2, y2)}
      >
        <img src="https://i.imgur.com/OnlkfKs.png" alt="Imagen 2" />
        <motion.button
          className="ver-mas-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          Ver más
        </motion.button>
      </motion.div>

      <motion.div
        className="polaroid polaroid-3"
        style={{
          y: image3Y,
          left: "75%",
          top: "15%",
          rotateX: rotateX3,
          rotateY: rotateY3,
          rotateZ: 6,
          transformStyle: "preserve-3d",
          perspective: 600,
        }}
        onMouseMove={(e) => handleMouseMove(e, x3, y3)}
        onMouseLeave={() => handleMouseLeave(x3, y3)}
      >
        <img src="https://i.imgur.com/LQ9Z1lu.jpeg" alt="Imagen 3" />
      </motion.div>
    </section>
  )
}
