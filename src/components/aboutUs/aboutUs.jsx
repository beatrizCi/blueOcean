import React from "react";
import { motion } from "framer-motion";
import './aboutUs.css';
const items = [
  {
    src: "/images/fish-bag.png",
    alt: "Plastic bag shaped like a fish",
    number: "8M",
    label: "tons of plastic end up in the ocean every year",
  },
  {
    src: "/images/turtle-plastic.png",
    alt: "Turtle carrying a plastic bottles",
    number: "100K+",
    label: "marine animals die annually due to plastic pollution",
  },
  {
    src: "/images/sea-pill.png",
    alt: "Ocean inside a pill capsule",
    number: "<1%",
    label: "of ocean plastic is visible at the surface",
  },
];

function AboutUs() {
  return (
    <section
      id="aboutus"
className="glass-bg text-white px-4 py-20 sm:px-10"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        The Impact of Ocean Pollution
      </motion.h2>
      <div className="grid gap-12 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mb-6 rounded-xl"
            />
            <motion.h3
              className="text-5xl font-bold text-cyan-400 mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {item.number}
            </motion.h3>
            <p className="text-sm sm:text-base text-white/80 max-w-xs">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;