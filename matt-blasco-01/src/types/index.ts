export interface RequestObject {
    request: Request
}

export interface ParamsObject {
    params: any
}

export interface RequestParamsObject extends RequestObject, ParamsObject{} 
