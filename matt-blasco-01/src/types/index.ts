export interface RequestObject {
    request: Request
}

export interface ParamsObject {
    params: any
}

export interface RequestParamsObject extends RequestObject, ParamsObject{} 

declare interface DBGenericInterface {
    readonly id: string
    readonly location?: {
        city: string
        country: string
        state: string
        street: string
        timezone: string
    }
}

declare interface UserGenericInterface {
    title?: string
    firstName: string
    lastName: string
    gender?: string
    email: string
    dateOfBirth?: string
    registerDate?: string
    phone?: string
    picture?: string
}

export interface UserFullViewInterface extends UserGenericInterface, DBGenericInterface {}
export interface UserPreviewInterface extends UserGenericInterface, DBGenericInterface {}
export interface UserCreateInterface extends UserGenericInterface{}
export interface UserUpdateInterface extends Omit<UserGenericInterface, "email">, DBGenericInterface {}



export interface BeautifyObject extends JSON {
    [key: string]: any
}

export interface ObjectFlat extends Object {
    [key:string]: any
}
