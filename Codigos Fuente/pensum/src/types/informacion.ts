export interface NivelType {
    nombre: string;   // Nivel
    materias: MateriaType[]; // Lista de materias en el nivel
}

export interface MateriaType {
    codigo?: string;        // Código de la Materia
    nombre: string;        // Nombre Completo
    creditos?: number;      // Número de Créditos
    info?: string;          // Información del espacio
    td?: number;            // Horas Trabajo Directo
    tc?: number;            // Horas Trabajo Colaborativo
    ta?: number;            // Horas Trabajo Autónomo
    urlSyllabus?: string;   // URL del syllabus o plan de la materia
    tipo?: string;          // Tipo de Materia (CO, CB, BI, AI, EX)
    electivas?: ElectivaType[]; //Lista de elecciones en el espacio
}

export interface ElectivaType {
    nombre: string;        // Nombre de la Electiva
    urlSyllabus: string;   // URL del syllabus o plan de la electiva
    tipo?: string;          // Tipo de Materia "OPCION"
}
