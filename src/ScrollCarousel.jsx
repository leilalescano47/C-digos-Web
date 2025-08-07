import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import "./ScrollCarousel.css";

export default function ScrollCarousel() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const images = [
    "https://i.imgur.com/PWEJ79m.png",
    "https://i.imgur.com/fkjLkZc.png",
    "https://i.imgur.com/roZMLOE.png",
    "https://i.imgur.com/PWEJ79m.png",
    "https://i.imgur.com/fkjLkZc.png",
    "https://i.imgur.com/roZMLOE.png",
  ];

  return (
    <div ref={ref} className="carousel-container">
      <motion.div className="image-track" style={{ x }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            className="carousel-image"
          />
        ))}
      </motion.div>
    </div>
  );
}