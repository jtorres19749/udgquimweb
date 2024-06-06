interface IObjectMap { 
    key: string,
    value: string | number | null | undefined
}

interface IData { 
    title: string,
    field: string 
}

interface ITableData { 
    title: string,
    field: string,
    size: number
}


interface IMongoQuery { 
    find : object ; 
    projection: object,
    skip: number ,
    limit: number,
    sort: object
}

interface IStudentSearchResult {
    codigo: string, 
    nombre: string,
    admision?: string,
    ciclos?: number,
    creditos?: number,  
    creditosFaltantes?: number, 
    nivel?: string, 
    promedio?: number,
    situacion?: string,
    status?: string,
    ultimoCiclo?: string,    
    _id : string
}

interface IUser {
    username?: string,
    password?: string,
    admin?: Boolean,
    name?: string,
    email: string,
    tmpid?: string,
    _id?: string
}

interface ISetting {
    actualSemester?:string, 
    lastSemester?:string,
    allSemesters?:string,
    importBatchSize?:number
}

export {
    IMongoQuery,
    IStudentSearchResult,
    IObjectMap,
    IData,
    ITableData,
    IUser,
    ISetting
}
