export const simulacion = (materiasSeleccionadas) => {
    /*Es importante aclarar que se asumió que las materias:
        1. Electiva Extrinseca lll era NO HOMOLOGABLE
        2. Modelos de programación l era HOMOLOGABLE
    En caso de que eso cambie se debe modificar el valor booleano de ambas en el archivo subjects.json
    */
    let indiceSeleccionLogica = materiasSeleccionadas.findIndex((materia) => materia.nombre === "Lógica");
    let indiceSeleccionArquitectura = materiasSeleccionadas.findIndex((materia) => materia.nombre === "Arquitectura de Computadores y Laboratorio");
    let indiceSeleccionEstadistica = materiasSeleccionadas.findIndex((materia) => materia.nombre === "Estadística");
    let indiceSeleccionProbabilidad = materiasSeleccionadas.findIndex((materia) => materia.nombre === "Probabilidad");
    
    let data = {
        creditosPerdidos: 0,
        creditosHomologados: 0,
        creditosHomologadosOB: 0,
        creditosHomologadosOC: 0,
        creditosHomologadosEE: 0,
        porcentajeAvance: 0,
        semestresRestantes: 0,
        requisitoSegundaLengua: 0,
    }

    //------------------ Sección fusión de materias ------------------
    /* En ese apartado se consideran las dos situaciones de fusión de 
    materias es decir, que para homologar los creditos de "estadistica
    y probabilidad" en el nuevo pensum se deben haber visto las materias
    "estadistica" y "probabilidad" en el pensum anterior. De igual manera
    con logica y arquitectura de computadores. Aquí se suman los creditos
    homologados (creditos correspondientes de la materia fusionada en el
    nuevo pensum) y se suman unos creditos perdidos que corresponden a
    los creditos sobrantes en el pensum anterior.
    */

    if(indiceSeleccionLogica != -1){
        if (indiceSeleccionArquitectura != -1) {
            data.creditosHomologados += 3;
            data.creditosPerdidos += 2;
            if (indiceSeleccionLogica > indiceSeleccionArquitectura) {
                materiasSeleccionadas.splice(indiceSeleccionLogica,1);
                materiasSeleccionadas.splice(indiceSeleccionArquitectura,1);
            }else{
                materiasSeleccionadas.splice(indiceSeleccionArquitectura,1);
                materiasSeleccionadas.splice(indiceSeleccionLogica,1);
            }
        } else {
            data.creditosPerdidos += 3; 
            materiasSeleccionadas.splice(indiceSeleccionLogica,1);
        }
    }

    if(indiceSeleccionEstadistica != -1){
        if (indiceSeleccionProbabilidad != -1) {
            data.creditosHomologados += 3;
            data.creditosPerdidos += 3;
            if (indiceSeleccionEstadistica > indiceSeleccionProbabilidad) {
                materiasSeleccionadas.splice(indiceSeleccionEstadistica,1);
                materiasSeleccionadas.splice(indiceSeleccionProbabilidad,1);
            }else{
                materiasSeleccionadas.splice(indiceSeleccionProbabilidad,1);
                materiasSeleccionadas.splice(indiceSeleccionEstadistica,1);
            }
        } else {
            data.creditosPerdidos += 3; 
            materiasSeleccionadas.splice(indiceSeleccionEstadistica,1);
        }
    }
    
    //------------------- Sección de equivalencias -------------------
    /* En ese apartado se consideran tres situaciones:
        1. Algunas materias si bien son homologables los creditos no corresponden
        y son menores en el pensum nuevo por ello se manejan de una forma diferente
        sumando como creditos homologados a los creditos equivalentes en el nuevo
        pensum y como creditos perdidos a los creditos sobrantes desde el antiguo
        pensum

        2. Las materias de Segunda lengua no son como tal parte del pensum pero es
        un requisito de grado haber cursado los 6 creditos de segunda lengua con
        el ILUD o presentar una certificación de B1 o superior. En este caso si
        se tenian creditos de segunda lengua se suman al requisito (6 creditos max)

        3. Las materias que tienen igual carga crediticia en el pensum nuevo y en el
        viejo pasan sus creditos de forma ordinaria. 
    */
    for (let i = materiasSeleccionadas.length - 1; i >= 0; i--) {
        if(materiasSeleccionadas[i].nombre === "Cálculo Diferencial"){
            //OB
            data.creditosHomologados += 3;
            data.creditosHomologadosOB += 3;
            data.creditosPerdidos += 1;
        }else if(materiasSeleccionadas[i].nombre === "Matemáticas Discretas"){
            //OB
            data.creditosHomologados += 2;
            data.creditosHomologadosOB +=2;
            data.creditosPerdidos += 1;
        }else if(materiasSeleccionadas[i].nombre === "Electiva Extrinseca l"){
            //EE
            data.creditosHomologados += 1;
            data.creditosHomologadosEE += 1;
            data.creditosPerdidos += 1;
        }else if(materiasSeleccionadas[i].nombre === "Investigación de Operaciones l"){
            //OB
            data.creditosHomologados += 2;
            data.creditosHomologadosOB += 2;
            data.creditosPerdidos += 1;
        }else if(materiasSeleccionadas[i].nombre === "Investigación de Operaciones ll"){
            //OB
            data.creditosHomologadosOB += 2;
            data.creditosHomologados += 2;
            data.creditosPerdidos += 1;
        }else if(materiasSeleccionadas[i].nombre === "Segunda Lengua lll"){
            data.requisitoSegundaLengua += 2;
            data.creditosPerdidos += 2;
        }else if(materiasSeleccionadas[i].nombre === "Segunda Lengua ll"){
            data.requisitoSegundaLengua += 2;
            data.creditosPerdidos += 2;
        }else if(materiasSeleccionadas[i].nombre === "Segunda Lengua l"){
            data.requisitoSegundaLengua += 2;
            data.creditosPerdidos += 2;
        }else{
            if (materiasSeleccionadas[i].homologable === true) {
                data.creditosHomologados += materiasSeleccionadas[i].creditos;

                switch (materiasSeleccionadas[i].Tipo) {
                    case "OB": 
                      data.creditosHomologadosOB += materiasSeleccionadas[i].creditos;
                      break;
                  
                    case "OC":
                        data.creditosHomologadosOC += materiasSeleccionadas[i].creditos;
                      break;
                
                    case "EE":
                        data.creditosHomologadosEE += materiasSeleccionadas[i].creditos;
                      break;
                  
                    default:
                      break;
                  }
                  
            } else {
                data.creditosPerdidos += materiasSeleccionadas[i].creditos;
            }
        }
    }

    //--------------------- Calculos de progreso ---------------------
    /* Se calcula el porcentaje de avance en el nuevo pensum teniendo
    en cuenta los creditos que se valieron como homologados. A si mismo 
    se estima una cantidad de semestres restantes tomando como base que:
        - SE VEAN 16 CREDITOS POR SEMESTRE
        - SE APRUEBEN TODOS LOS CREDITOS DE CADA SEMESTRE
     */

    data.porcentajeAvance = (data.creditosHomologados*100)/150;
    data.semestresRestantes = (150 - data.creditosHomologados)/16;
    console.log(data);
    
    return data
}
