import { motion } from "framer-motion";
import testimonial1 from "../assets/Iconos/borrar.png";
import testimonial2 from "../assets/Iconos/combinar.png";
import testimonial3 from "../assets/Iconos/ajuste.png";
import testimonial4 from "../assets/Iconos/siguiente-nivel.png";


const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Se eliminaron algunas asignaturas, sin que ello altere el sello del proyecto curricular.",
    image: testimonial1,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Se fusionaron algunas asignaturas",
    image: testimonial2,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Se ajustaron los créditos de algunas asignaturas",
    image: testimonial3,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Se aplicaron las directrices institucionales y de facultad sobre opciones de trabajo de grado, nivelatorios, créditos de electivas, segunda lengua.",
    image: testimonial4,
  },
];

export const Beneficios = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark1 relative h-full pb-10">
    <div className="absolute -top-16" id="beneficios" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          Beneficios
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 h-80 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
              </div>
              
              <div className="content-text-white text-center">{testimonial.content}</div>
              <div className="flex justify-center mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Customer avatar"
                    width="80px"
                    height="5px"
                    aria-label={testimonial.customerName}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
