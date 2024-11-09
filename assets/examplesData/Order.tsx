import { EStatus } from "@/constants/types/IOrder";

// @ts-ignore
export const orderShortData: orderShortItem = [
    {id: '1', date: '21/10/2025', delivery: "Delivery1", material: "Material1", status: EStatus.Processing},
    {id: '2', date: '20/10/2025', delivery: "Delivery2", material: "Material2", status: EStatus.Canceled},
    {id: '3', date: '19/10/2025', delivery: "Delivery3", material: "Material3", status: EStatus.Delivered},
    {id: '4', date: '18/10/2025', delivery: "Delivery4", material: "Material4", status: EStatus.Canceled},
    {id: '5', date: '17/10/2025', delivery: "Delivery5", material: "Material5", status: EStatus.Processing},
    {id: '6', date: '16/10/2025', delivery: "Delivery6", material: "Material6", status: EStatus.Processing},
];