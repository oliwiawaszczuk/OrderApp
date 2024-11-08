import Project from "@/constants/types/IProject";
import {Product} from "@/constants/types/IProduct";

export default interface Order {
    date: string,
    project: Project,
    products: Product[],
}