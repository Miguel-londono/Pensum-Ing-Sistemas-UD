import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Cómo se observa en la estructura curricular?",
    answer: [
      "La estructura curricular está distribuida en 9 semestres; sin embargo, de acuerdo con el marco legal vigente, el estudiante podría completarla en 8 semestres.",
      "La cantidad de créditos disminuye en estos 9 semestres, conservando factores diferenciadores como el Grupo de trabajo y el Grupo de investigación.",
      "El eje principal de la reforma es el estudiante, ampliándose el abanico de alternativas de profundización, con opciones actualizadas y una mayor flexibilidad para que elija una ruta de formación acorde a sus intereses y propósitos profesionales.",
      "Las improntas institucionales se mantienen, respetando los valores y la identidad de la institución."
  ]
  },
  {
    question: "¿Qué pasa cuando el estudiante termina el 5to semestre?",
    answer:
      ["El estudiante de Ingeniería de Sistemas seleccionará uno de los ejes de formación sobre el cual desea realizar la profundización profesional."],
  },
  {
    question: "¿Qué es Curso Obligatorio RF?",
    answer:
      ["Cursos obligatorios, de único espacio académico, necesario para fundamentar la RF seleccionada."],
  },
  {
    question: "¿Qué es Curso Electivo RF?",
    answer:
      ["Curso electivo, con varios espacios académicos, donde el estudiante selecciona una de las propuestas temáticas, sobre  la cual requiere fortalecer su formación en la RF seleccionada."],
  },
  {
    question: "¿Qué es Curso Curso Electivo Flexible RF?",
    answer:
      ["Curso electivo perteneciente a otra RF, con varios espacios académicos, donde el estudiante selecciona una de las propuestas temáticas, sobre  la cual quisiera complementar su formación en la RF seleccionada o su proceso de investigación."],
  },
];

export const Preguntas = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="preguntas" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">¿Tines preguntas?</p>
          <h2 className="mb-16 block-big-title text-center">
            Preguntas más frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content.map((paragraph, idx) => (
            <p key={idx} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#f6b201"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
