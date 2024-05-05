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
        Actualmente me encuentro en la etapa final de mis estudios en{" "}
        <span className="font-medium">Ingenieria Informatica</span>, y seguido reforzando
        mis conocimientos en programación, por medio de un bootcamp llamado Academlo.
      </p>

    </motion.section>
  );
}
