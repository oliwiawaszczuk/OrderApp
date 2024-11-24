import Project from "@/constants/types/IProject";
import IProduct from "@/constants/types/IProduct";

export interface Status {

}

export enum TypeOfDelivery {
    Standard = "Standard Delivery",
    Express = "Express Delivery",
    LocalPickup = "Local Pickup",
}

export default interface Delivery {
    name: string,
    companyName: string,
    companyLocalisation: string,
    cost: string,
    contact: string, // mail, phone, number, website
    products: IProduct[],
    note: string,
    files: string[],
    projectContracted: Project,
    statusPartnership: Status,
    typeOfDelivery: TypeOfDelivery,
}

// temporary
export interface ShortItemDelivery {
    id: number,
    name: string,
    companyName: string,
    contact: string,
    projectContracted: string,
    statusPartnership: string,
}