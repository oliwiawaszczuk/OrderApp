import Project from "@/constants/types/IProject";
import IProduct from "@/constants/types/IProduct";

export enum TypeOfDelivery {
    type1,
    type2,
}

export default interface Order {
    id: number,
    date: string,
    project: Project,
    products: IProduct[],
    typeOfDelivery: TypeOfDelivery,
}

export enum EStatus {
    Processing = "#f1c34d",
    Delivered = "#43d843",
    Canceled = "#e23333",
}

export interface orderShortItem {
    id: number,
    date: string,
    delivery: string,
    material: string,
    status: EStatus,
}