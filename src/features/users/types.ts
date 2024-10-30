export interface IUser {
    id: number
    name:string
    surname:string
    age:number
    city:string
}

export interface IState {
    list: IUser[]
}