export enum MainCategory {
    PlumbingSupplies = "Plumbing Supplies",
    ElectricalSupplies = "Electrical Supplies",
    BuildingMaterials = "Building Materials",
    SafetyGear = "Safety Gear",
    HeavyMachinery = "Heavy Machinery",
    HandTools = "Hand Tools",
    PowerTools = "Power Tools",
    LumberWoodProducts = "Lumber & Wood Products",
}

export interface IProductCategories {
    mainCategory: MainCategory,
    name: string,
}

export const ProductCategories: IProductCategories[] = [
    {mainCategory: MainCategory.BuildingMaterials, name: "General"},
    {mainCategory: MainCategory.BuildingMaterials, name: "Bricks & Blocks"},
    {mainCategory: MainCategory.BuildingMaterials, name: "Steel & Rebar"},
    {mainCategory: MainCategory.BuildingMaterials, name: "Aggregates"},
]
