import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import crecimientopersonal from "../assets/images/crecimientopersonal.png";
import habilidadespracticas from "../assets/images/habilidadespracticas.png";
import oportunidadeslaborales from "../assets/images/oportunidadeslaborales.png";
import areasconocimiento from "../assets/images/areasconocimiento.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Motivos = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="motivos"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Motivos para la Actualización del Plan de Estudios
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                La actualización del plan de estudios responde a las demandas actuales de estudiantes, 
                egresados y el mercado laboral. Desde el cambio de horas a créditos en 2012, 
                el entorno profesional ha evolucionado y requiere una formación más alineada con nuevas áreas como inteligencia artificial y ciberseguridad.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span> <b> Plan de estudios actualizado: </b> Enfocado en las tendencias actuales del mercado. </span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span> <b> Habilidades prácticas: </b> Formación en herramientas y tecnologías de vanguardia. </span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span> <b>Oportunidades laborales: </b> Alta demanda de profesionales capacitados en esta área. </span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span> <b>Nuevos ejes de Formación: </b> Proponemos ejes especificos de formación como: Redes de Datos, Ingenieria de datos, y muchos más. </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={crecimientopersonal.src}
                  alt="Crecimiento personal"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Crecimiento personal"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={habilidadespracticas.src}
                  alt="Habilidades practicas"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Habilidades practicas"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={oportunidadeslaborales.src}
                  alt="Oportunidades laborales"
                  className="rounded-xl  main-border-gray"
                  aria-label="Oportunidades laborales"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={areasconocimiento.src}
                  alt="Areas conocimiento"
                  className="rounded-xl  main-border-gray"
                  aria-label="Areas conocimiento"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
