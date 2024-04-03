"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3">
        Actualmente, me encuentro en la etapa final de mis estudios en{" "}
        <span className="font-medium">Ingenieria Informatica</span>, Durante este tiempo, he decidido profundizar 
        mis conocimientos en programación, lo cual me ha llevado a inscribirme en un programa académico enfocado en {" "}
        <span className="font-medium">Ciencias de la computacion</span>{" "}
        <span className="italic"> en Academlo. Lo que más disfruto de la programación</span> es la satisfacción 
        de encontrar soluciones a los desafíos que se presentan. La <span className="underline">emoción</span> de haber resuelto
        un problema con éxito es incomparable. En cuanto al manejo de mis habilidades técnicas se centran
        en tecnologías como{" "}
        <span className="font-medium">
          React, Next, Node y Redux
        </span>
        . además de estar familiarizado con Python. Siempre estoy buscando oportunidades para aprender nuevas
        tecnologías y mejorar mis habilidades. Actualmente, estoy en búsqueda de un empleo a tiempo completo en desarrollo web {" "}
        <span className="font-medium">donde pueda aplicar</span> y seguir ampliando mis conocimientos y experiencia en este campo.
      </p>

    </motion.section>
  );
}
