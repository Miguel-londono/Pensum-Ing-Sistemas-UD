import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../assets/images/LogoInS.svg"
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Inicio", href: "/#home", ariaLabel: "Home" },
  { label: "Motivos", href: "/#motivos", ariaLabel: "Motivos" },
  { label: "Ejes", href: "/#ejes", ariaLabel: "Ejes" },
  { label: "Flexibilidad", href: "/#flex", ariaLabel: "Flexibilidad" },
  { label: "Beneficios", href: "/#beneficios", ariaLabel: "Beneficios" },
  { label: "Actualización", href: "/#actualización", ariaLabel: "Actualización" },
  { label: "Preguntas", href: "/#preguntas", ariaLabel: "Preguntas" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-white lg:bg-bgLightTransparent z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-black mr-2 text-6xl">
                <img src={Logo.src} alt="Logo" width="100" height="100" />
              </div>
              <div className="text-black font-['Inter'] font-bold text-xl">
                Ing. Sistemas
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-black lg:text-base text-2xl leading-6 mr-4 ml-4  2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgLight2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-600 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-white z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-bgLight3 pt-10"
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-black lg:text-base text-2xl leading-6 mr-4 ml-4  2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
