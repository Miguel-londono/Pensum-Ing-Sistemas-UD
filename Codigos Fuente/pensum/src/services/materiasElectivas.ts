import infoElectivas from "@/data/infoElectivas";
import type { MateriaType } from "@/types/informacion";

export function obtenerMateria(codigo: string){
    return infoElectivas.find(materia => materia.codigo === codigo)
}

export function obtenerMaterias(): MateriaType[]{
    return infoElectivas
}