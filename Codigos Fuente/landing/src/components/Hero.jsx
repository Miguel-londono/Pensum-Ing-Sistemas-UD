import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";
import planactualizacion from "../assets/images/planactualizacion.png"
import facultad40 from "../assets/images/facultad40.jpg"

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center items-center pb-4 bg-bgDark1 mb-10 md:mb-10 lg:mb-10 xl:mb-8 2xl:mb-16 hero-bg-gradient sm:pb-16 md:pb-24 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-4xl sm:text-3xl  mb-6 sm:mt-15 mt-10  font-bold">
            Descubre la actualizacion curricular
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
            <h1>Ingenieria de Sistemas</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Conoce cómo el plan de estudios se adapta a las necesidades actuales del mercado laboral.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-10 sm:mb-10 justify-center">
            <a href="https://ingenieria.udistrital.edu.co/bannersis/pensum/creditos/index-pensum2.html" target="_blank" rel="noopener noreferrer">
              <button
                className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-secondaryColor transition"
                aria-label="Live demo"
              >
                Antiguo Plan de Estudios
              </button>
            </a>
            <a href="localhost:4321/pensum" target="_blank" rel="noopener noreferrer">
              <button
                className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-rojoUd transition"
                aria-label="Live demo"
              >
                Nuevo Plan de Estudios
              </button>
            </a>
            <a href="localhost:4321/simulador" target="_blank" rel="noopener noreferrer">
              <button
                className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-secondaryColor transition"
                aria-label="Live demo"
              >
                Simulador
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative flex justify-center w-full pb-20">
            <img
              src={facultad40.src}
              alt="Facultad Ingenieria"
              className="w-full max-w-full h-[200px] sm:h-[300px] lg:h-[400px] mx-auto rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
