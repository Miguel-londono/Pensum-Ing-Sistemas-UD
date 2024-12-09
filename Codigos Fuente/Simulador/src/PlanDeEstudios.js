import React, { useState, useEffect } from 'react';
import './PlanDeEstudios.css';
import { simulacion } from './simulacion';

const Materia = ({ materia, toggleAprobado }) => (
  <div className={`materia ${materia.estado ? 'aprobada' : ''}${materia.Tipo}`}>
    <input
      type="checkbox"
      checked={materia.estado}
      onChange={() => toggleAprobado(materia.nombre)} // Cambiado a 'materia.nombre'
    />
    <div class="cod">
      <span>Código: {materia.cod}</span>
    </div>
    <div class="creditos">
      <span>Créditos: {materia.creditos}</span>
    </div>
    <div class="horas">
      <div><span>TD: {materia.TD}</span></div>
      <div><span>TC: {materia.TC}</span></div>
      <div><span>TA: {materia.TA}</span></div>
    </div>
    <div class="nombre"><span>{materia.nombre}</span></div>
  </div>
);

const PlanDeEstudios = () => {
  const [materias, setMaterias] = useState([]);
  const [resultadoSimulacion, setResultadoSimulacion] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        const inicializarEstado = data.map(materia => ({
          ...materia,
          estado: false
        }));
        setMaterias(inicializarEstado);
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  const abrirModal = () => setMostrarModal(true);

  const cerrarModal = () => setMostrarModal(false);

  const toggleAprobado = (nombre) => {
    setMaterias((prevMaterias) => {
      const nuevasMaterias = prevMaterias.map((m) =>
        m.nombre === nombre ? { ...m, estado: !m.estado } : m
      );

      // Agregar console.log para ver el cambio de estado
      //console.log("Estado de materias actualizado:", nuevasMaterias);
      return nuevasMaterias;
    });
  };

  const aprobarMateriasNivel = (nivelSeleccionado) => {
    setMaterias((prevMaterias) =>
      prevMaterias.map((materia) =>
        materia.nivel === nivelSeleccionado
          ? { ...materia, estado: true } // Asigna explícitamente 'true'
          : materia
      )
    );
  };

  const handleSimulacion = () => {
    // Filtrar las materias seleccionadas (estado: true)
    const materiasSeleccionadas = materias.filter(materia => materia.estado);
    // Llamar a la función simulacion pasando las materias seleccionadas
    const resultado = simulacion(materiasSeleccionadas);
    setResultadoSimulacion(resultado);  // Guardar el resultado en el estado
  };

  // Agrupar materias por nivel
  const niveles = materias.reduce((acc, materia) => {
    acc[materia.nivel] = acc[materia.nivel] || [];
    acc[materia.nivel].push(materia);
    return acc;
  }, {});

  return (
    <div id="contenedorSimulacion">
      <button onClick={() => {
        handleSimulacion();
        abrirModal();
      }}
        className={!materias.some((materia) => materia.estado === true) ? 'boton-deshabilitado' : 'boton'}
        disabled={!materias.some((materia) => materia.estado === true)}>
        Simular Avance
      </button>
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Resultado de la Simulación</h2>
            <p>Créditos Homologados: <strong>{resultadoSimulacion.creditosHomologados}</strong></p>
            <p>Créditos Perdidos: <strong>{resultadoSimulacion.creditosPerdidos}</strong></p>
            <strong>En el nuevo pensum tendrá:</strong>
            <p>Porcentaje TOTAL de Avance:</p>
            <div className="barra-progreso">
              <div className="relleno" style={{ width: `${resultadoSimulacion.porcentajeAvance.toFixed(2)}%` }}>
              {resultadoSimulacion.porcentajeAvance.toFixed(1)}%
              </div>
            </div>
            <span>Creditos OB: </span><strong>{resultadoSimulacion.creditosHomologadosOB}</strong>
            <div className="barra-progreso">
              <div className="relleno-OB" style={{ width: `${(resultadoSimulacion.creditosHomologadosOB/101*100).toFixed(1)}%` }}>
                {((resultadoSimulacion.creditosHomologadosOB/101)*100).toFixed(1)}%
              </div>
            </div>
            <span>Creditos OC: </span><strong>{resultadoSimulacion.creditosHomologadosOC}</strong>
            <div className="barra-progreso">
              <div className="relleno-OC" style={{ width: `${(resultadoSimulacion.creditosHomologadosOC/12*100).toFixed(1)}%` }}>
                {((resultadoSimulacion.creditosHomologadosOC/12)*100).toFixed(1)}%
              </div>
            </div>
            <span>Creditos Electivas: </span><strong>{resultadoSimulacion.creditosHomologadosEE}</strong>
            <div className="barra-progreso">
              <div className="relleno-EE" style={{ width: `${(resultadoSimulacion.creditosHomologadosEE/37*100).toFixed(1)}%` }}>
                {((resultadoSimulacion.creditosHomologadosEE/37)*100).toFixed(1)}%
              </div>
            </div>
            <p>Semestres Necesarios para concluir: <strong>{Math.ceil(resultadoSimulacion.semestresRestantes)}</strong></p>
            <p>Requisito de Segunda Lengua: <strong>{resultadoSimulacion.requisitoSegundaLengua} créditos</strong></p>
            <button className="cerrar-modal" onClick={cerrarModal}>Cerrar ventana</button>
          </div>
        </div>
        /*<div id="resultados">
          <h2>Resultado de la Simulación</h2>
          <p>Créditos Homologados: <strong>{resultadoSimulacion.creditosHomologados}</strong></p>
          <p>Créditos Perdidos: <strong>{resultadoSimulacion.creditosPerdidos}</strong></p>
          <p>Porcentaje de Avance (en el pensum nuevo): <strong>{resultadoSimulacion.porcentajeAvance.toFixed(2)}%</strong></p>
          <p>Semestres Necesarios para concluir: <strong>{Math.ceil(resultadoSimulacion.semestresRestantes)}</strong></p>
          <p>Requisito de Segunda Lengua: <strong>{resultadoSimulacion.requisitoSegundaLengua} créditos</strong></p>
        </div>*/
      )}
      <div className="plan-de-estudios">
        {Object.keys(niveles).map((nivel) => (
          <div key={nivel} className="nivel-columna">
            <h3 onClick={() => aprobarMateriasNivel(Number(nivel))}>Nivel {nivel}</h3>
            {niveles[nivel].map((materia) => (
              <Materia key={materia.codigo} materia={materia} toggleAprobado={toggleAprobado} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanDeEstudios;
