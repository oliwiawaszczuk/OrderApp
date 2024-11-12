import {left_arrow} from "@/constants/icons";
import {ProductCategories} from "@/constants/data/ProductCategories";

export function getPathToBackCategories(category: string) {
    return `${left_arrow + ProductCategories[category].mainCategory} > ${category}`;
}