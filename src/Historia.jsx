"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./Historia.css"

export default function Historia() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const imageX = useTransform(scrollYProgress, [0, 0.4], ["-45%", "5%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1])
  const textX = useTransform(scrollYProgress, [0.3, 0.6], ["-50%", "0%"])
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const title1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const title2Opacity = useTransform(scrollYProgress, [0.4, 0.7, 0.8], [0, 1, 0])

  return (
    <div
      ref={ref}
      className="historia-section"
      style={{ marginBottom: '200px' }}
    >
      <motion.h2
        className="historia-title historia-title-1"
        style={{
          opacity: title1Opacity,
        }}
      >
        CONOCÉ NUESTRA HISTORIA
      </motion.h2>

      <motion.h2
        className="historia-title historia-title-2"
        style={{
          opacity: title2Opacity,
        }}
      >
        LA ISLA SURF SHOP
      </motion.h2>

      <div
        className="historia-content-wrapper"
      >
        <motion.p
          className="historia-text"
          style={{
            x: textX,
            opacity: textOpacity,
          }}
        >
          La Isla nace a partir de la historia de un surfista que, después de un largo viaje por Australia,
          quiso crear un espacio donde se pudieran encontrar todos los productos que reflejen el estilo de
          vida de los amantes del surf, los viajes y la vida al aire libre.
        </motion.p>

        <motion.img
          src="https://i.imgur.com/N4dJKcF.png"
          alt="Local La Isla"
          className="historia-image"
          style={{
            x: imageX,
            scale: imageScale,
          }}
        />
      </div>
    </div>
  )
}