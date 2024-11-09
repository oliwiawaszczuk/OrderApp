import Project from "@/constants/types/IProject";
import Product from "@/constants/types/IProduct";

export default interface Order {
    date: string,
    project: Project,
    products: Product[],
}

export enum EStatus {
    Processing = "#f1c34d",
    Delivered = "#43d843",
    Canceled = "#e23333",
}

export interface orderShortItem {
    id: string,
    date: string,
    delivery: string,
    material: string,
    status: EStatus,
}