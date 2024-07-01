import { IData, ITableData } from './interfaces'

const URL = "http://localhost:3000/api";
const URLRPT = "http://localhost:3000/api";

// const URL = "https://udgquim.onrender.com/api";
// const URLRPT = "https://udgquim.onrender.com/api";

const StudentFields_General: Array<IData> = [
    {title: "Código" , field: "codigo"},
    {title: "Nombre" , field: "nombre"},
    {title: "Estatus" , field: "status"},
    {title: "Situación" , field: "situacion"},
    {title: "Admisión" , field: "admision"},
    {title: "Carrera" , field: "carrera"},
    {title: "Centro" , field: "centro"},
    {title: "Sede" , field: "sede"},
    {title: "Correo" , field: "correoInstitucional"},
    {title: "Nivel" , field: "nivel"},
    {title: "Ciclos" , field: "ciclos"},
    {title: "Último ciclo" , field: "ultimoCiclo"},
    {title: "Promedio" , field: "promedio"},
    {title: "Créditos" , field: "creditos"},
    {title: "Porcentaje en créditos" , field: "porcentajeEnCreditos"},
    {title: "Créditos Faltantes" , field: "creditosFaltantes"},
    {title: "Créditos Máximos" , field: "creditosMaximos"},
    {title: "Créditos Mínimos" , field: "creditosMinimos"},
    {title: "Fecha" , field: "fecha"},
    {title: "Fecha de actualización" , field: "fecActualizacion"}
]

const StudentFields_Ingreso: Array<ITableData> = [
    {title: "Ciclo" , field: "ciclo", size: 1},
    {title: "Tipo de admisión" , field: "tipoDeAdmision", size:3},
    {title: "AV" , field: "av", size:1},
    {title: "PA" , field: "pa", size:1},
    {title: "PAA" , field: "paa", size:1},
    {title: "PEP" , field: "pep", size:1},
    {title: "Procedencia" , field: "procedencia", size:3}
]


const StudentFields_ListaCiclos: Array<ITableData> = [
    {title: "Ciclo" , field: "ciclo", size: 1},
    {title: "Sede" , field: "sede", size:2},
    {title: "Centro" , field: "centro", size:2},
    {title: "Avance" , field: "avance", size:1},
    {title: "Créditos" , field: "creditos", size:1},
    {title: "Promedio" , field: "promedio", size:1},
    {title: "Admisión" , field: "admision", size:3}
]


const StudentFields_Calificaciones: Array<ITableData> = [
    {title: "Ciclo" , field: "ciclo", size: 1},
    {title: "Materia" , field: "materia", size: 4},
    {title: "Calificación" , field: "calificacion", size:2},
    {title: "Calificación Letra"  , field: "calificacionLetra", size:3},
    {title: "Créditos" , field: "creditos", size:1}
]



export {
    URL,
    URLRPT,
    StudentFields_General,
    StudentFields_Ingreso,
    StudentFields_ListaCiclos,
    StudentFields_Calificaciones
}
