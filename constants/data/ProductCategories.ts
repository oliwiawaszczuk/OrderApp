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

export enum SubCategory {
    General = "General",
    BricksAndBlocks = "Bricks & Blocks",
    SteelAndRebar = "Steel & Rebar",
    Aggregates = "Aggregates",
}

export interface IProductCategories {
    mainCategory: MainCategory,
    name: string,
}

export const ProductCategories: Record<string, IProductCategories> = {
    "General": { mainCategory: MainCategory.BuildingMaterials, name: "General" },
    "Bricks & Blocks": { mainCategory: MainCategory.BuildingMaterials, name: "Bricks & Blocks" },
    "Steel & Rebar": { mainCategory: MainCategory.BuildingMaterials, name: "Steel & Rebar" },
    "Aggregates": { mainCategory: MainCategory.BuildingMaterials, name: "Aggregates" },
};
