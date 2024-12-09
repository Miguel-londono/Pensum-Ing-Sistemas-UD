import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";

export const Ejes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materias, setMaterias] = useState([]);
  const [enfoque, setEnfoque] = useState("");

  // Datos de las materias para cada enfoque
  const materiasPorEnfoque = {
    "Análisis, diseño y construcción de software": [
      "Diseño de Software",
      "Construcción de Software",
      "Ingeniería de Requerimientos",
      "Calidad de Software",
      "Ingeniería Web",
      "Verificación de Software",
      "Gestión y Configuración de Software",
      "Computación Distribuida y Paralela",
      "Desarrollo de Software Basado en Componentes",
      "Desarrollo de SW para Videojuegos",
    ],
    "Ingeniería de datos": [
      "Estadística Multidimensional",
      "Bases de Datos Avanzadas",
      "Minería de Datos",
      "Programación para Análisis de Datos",
      "Big Data",
      "Gestión de Datos Abiertos",
      "Data Warehouse",
      "Heurística para el Análisis de Datos",
      "Arquitectura de Bases de Datos",
      "Análisis Predictivo",
      "Visualización de Datos",
      "Gestión de la Calidad de los Datos",
    ],
    "Redes de Datos": [
      "Redes I",
      "Redes II",
      "Redes III",
      "Redes IV",
      "Arquitectura de Servicios en la Nube",
      "Mecanismos de Seguridad Informática",
      "Redes de Datos Inteligentes",
      "Gestión de Seguridad Informática",
      "Técnicas de Cifrado",
      "SDN (Software Defined Network)",
      "Tecnologías de Virtualización de Redes",
      "Optimización de Redes y Gestión del Tráfico",
    ],
    "Planeación y Gestión de Proyectos de TI": [
      "Planeación Estratégica",
      "Fundamentos de Arquitectura Empresarial",
      "Gestión de Proyectos Informáticos",
      "Gobierno y Gestión de TI",
      "Gestión de Servicios de TI",
      "Uso y Apropiación de TI",
      "Cibernética Organizacional",
      "Interventoría Informática",
      "Ingeniería Económica para Software",
      "Auditoría Informática",
      "Herramientas de Gestión de TI",
      "Metodologías de Gestión de Proyectos",
      "Gestión de la Innovación en TI",
      "Gestión de la Calidad en Proyectos TI",
    ],
    "Cibernética e Inteligencia Artificial": [
      "Inteligencia Artificial I",
      "Inteligencia Artificial II",
      "Cibernética I",
      "Cibernética II",
      "Inteligencia Artificial Avanzada I",
      "Inteligencia Artificial Avanzada II",
      "Inteligencia Artificial Avanzada III",
      "Cibernética Cualitativa I",
      "Cibernética Cualitativa II",
      "Cibernética Cualitativa III",
      "Robótica y Automatización",
      "Sistemas Autónomos",
      "Redes Neuronales y Deep Learning",
      "Procesamiento de Lenguaje Natural",
      "Visión por Computadora",
      "Agentes Inteligentes y Sistemas Multiagentes",
    ],
  };

  const handleButtonClick = (enfoque) => {
    setIsModalOpen((prev) => {
      console.log(prev);
      return prev;
    });
    setIsModalOpen(true);
    setMaterias(materiasPorEnfoque[enfoque]);
    setEnfoque(enfoque);
  };

  return (
    <section
      className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1"
      id="ejes"
    >
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-start bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row ">
          <div className="w-full  flex flex-col lg:mx-unset">
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title text-center">
              Nuevos Ejes de Formación
            </h2>
            <p className="mb-7 text-secondaryText leading-loose">
              Los nuevos ejes de formación permiten que el ingeniero de sistemas
              graduado adquiera una sólida comprensión en áreas clave como el
              desarrollo de software, la gestión de datos, las redes de
              comunicación, la administración de proyectos tecnológicos y la
              inteligencia artificial.
            </p>
            <div className="w-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
              <button
                className="w-64 sm:w-70 h-15 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-rojoUd transition"
                aria-label="Live demo"
                onClick={() =>
                  handleButtonClick(
                    "Análisis, diseño y construcción de software"
                  )
                }
              >
                Análisis, diseño y construcción de software
              </button>
              <button
                className="w-64 sm:w-70 h-15 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-rojoUd transition"
                aria-label="Live demo"
                onClick={() => handleButtonClick("Ingeniería de datos")}
              >
                Ingeniería de datos
              </button>
              <button
                className="w-64 sm:w-70 h-15 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-rojoUd transition"
                aria-label="Live demo"
                onClick={() => handleButtonClick("Redes de Datos")}
                a
              >
                Redes de Datos
              </button>
              <button
                className="w-64 sm:w-70 h-15 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-rojoUd transition"
                aria-label="Live demo"
                onClick={() =>
                  handleButtonClick("Planeación y Gestión de Proyectos de TI")
                }
              >
                Planeación y Gestión de Proyectos de TI
              </button>
              <button
                className="w-64 sm:w-70 h-15 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-rojoUd transition"
                aria-label="Live demo"
                onClick={() =>
                  handleButtonClick(
                    "Cibernética e Inteligencia Artificial"
                  )
                }
              >
                Cibernética e Inteligencia Artificial
              </button>
            </div>

            {isModalOpen && (
              <InvitationModal setIsOpen={setIsModalOpen} materias={materias} enfoque={enfoque} />
            )}
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
