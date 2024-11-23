import {SubCategory} from "@/constants/data/ProductCategories";

export enum Currencies {
    dollar = "$",
    euro = "€",
    pln = "zł",
}

export default interface IProduct {
    id: number,
    name: string,
    currency: Currencies;
    currencyBeforeAmount: boolean,
    costAmount: number,
    forHowManyCost: string, // za co costAmount np. {costAmount} per pound
    description: string,
    // image
    company: string,
    category: SubCategory,
    // count: number,
    // files[]
}