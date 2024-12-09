import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const InvitationModal = ({ setIsOpen, materias, enfoque }) => {
  if (!materias || materias.length === 0) {
    return null; // No renderiza el modal si no hay materias
  }

  const numColumns = 5; // Número de columnas para las materias
  const maxItemsPerColumn = 5; // Número máximo de materias por columna

  // Dividir las materias en columnas
  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    materias.slice(columnIndex * maxItemsPerColumn, (columnIndex + 1) * maxItemsPerColumn)
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
        className="md:w-screen md:h-screen w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="md:w-screen w-full sm:h-auto sm:w-3/4 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
            <div className="w-full flex items-center flex-col justify-center pt-24 sm:pt-0">
              <h3 className="mb-7 text-2xl text-primaryText font-bold leading-snug text-center">
                Eje de formación seleccionado: <span className="text-secondaryColor">{enfoque}</span>
              </h3>

              <div className="flex justify-between gap-4">
                {columns.map((column, colIndex) => (
                  <ul key={colIndex} className="mb-6 text-primaryText mt-12">
                    {column.map((materia, index) => (
                      <li key={index} className="mb-4 flex">
                        <CheckArrowIcon />
                        <span>{materia}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div
              className="md:relative sm:relative absolute top-6 right-6 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
