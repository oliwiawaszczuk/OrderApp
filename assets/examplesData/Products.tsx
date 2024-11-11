import IProduct, {Currencies} from "@/constants/types/IProduct";
import {SubCategory} from "@/constants/data/ProductCategories";

export const Products: IProduct[] = [
    {
        id: 1,
        name: "Structural Steel Beams",
        currency: Currencies.dollar,
        currencyBeforeAmount: true,
        costAmount: 1.50,
        forHowManyCost: " per pound",
        description: "Essential for supporting frameworks, offering strength and durability for any construction project.",
        company: "company",
        category: SubCategory.General,
    }
]