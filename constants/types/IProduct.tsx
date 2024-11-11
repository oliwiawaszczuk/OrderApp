export enum Currencies {
    dollar = "$",
    euro = "€",
    pln = "zł",
}

export default interface Product {
    name: string,
    currency: Currencies;
    costAmount: number,
    forHowManyCost: string, // za co costAmount np. {costAmount} per pound
    company: string,
    count: number,
}