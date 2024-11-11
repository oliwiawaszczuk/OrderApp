import Project from "@/constants/types/IProject";
import IProduct from "@/constants/types/IProduct";

export interface Status {

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
}