import { useState } from 'react';
import './BarraMaterias.css'

// Definición del componente BarraMateriasReact
const BarraMateriasReact = () => {
  // Se crea un estado 'filtroActivo' que indica el filtro actualmente seleccionado. Inicialmente está en 'null'.
  const [filtroActivo, setFiltroActivo] = useState(null);

  // Función para aplicar el filtro al hacer clic en una categoría
  const aplicarFiltro = (tipo) => {
    // Si el filtro actual es el mismo al que se hizo clic, se desactiva; de lo contrario, se activa el nuevo filtro.
    if (filtroActivo === tipo) {
      setFiltroActivo(null);
    } else {
      setFiltroActivo(tipo);
    }

    // Selecciona todos los elementos con la clase 'materia'
    const materias = document.querySelectorAll('.materia');
    
    // Aplica el efecto de opacidad en función del filtro activo
    materias.forEach((materia) => {
      const tipoMateria = materia.getAttribute('data-tipo');
      
      if (filtroActivo === tipo) {
        // Si el filtro se deselecciona, todas las materias son visibles (opacidad 1)
        materia.style.opacity = '1';
        materia.removeAttribute("style");
      } else {
        // Si hay un filtro activo, se ajusta la opacidad según si la materia corresponde al tipo seleccionado
        materia.setAttribute("style", tipoMateria === tipo ? "":"pointer-events: none; opacity: 0.3")
      }
    });
  };

  // Lista de categorías con tipos y nombres, que representa cada filtro
  const categorias = [
    { tipo: 'CB', nombre: 'Ciencias Básicas' },
    { tipo: 'BI', nombre: 'Básicas de Ingeniería' },
    { tipo: 'AI', nombre: 'Aplicadas de Ingeniería' },
    { tipo: 'CO', nombre: 'Complementario' },
    { tipo: 'EX', nombre: 'Extrínsecas' }
  ];

  return (
    <div className="barra-categorias">
      {/* Recorre las categorías y crea un botón para cada una */}
      {categorias.map(({ tipo, nombre }) => (
        <button
          key={tipo} // La clave única para cada botón basado en el tipo
          onClick={() => aplicarFiltro(tipo)} // Llama a aplicarFiltro con el tipo de categoría
          className={`categoria ${tipo} ${filtroActivo === tipo ? 'activo' : ''}`} // Agrega clases condicionales según si el filtro está activo
        >
          {nombre} {/* Texto del botón que corresponde al nombre de la categoría */}
        </button>
      ))}
    </div>
  );
};

export default BarraMateriasReact; // Exporta el componente para que se pueda usar en otras partes de la aplicación
