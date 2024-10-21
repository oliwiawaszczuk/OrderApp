export interface Tab {
    icon: string,
    label: string,
    path: string,
}

export const Tabs: Tab[] = [
    {icon: "home", label: "Home", path: "home"},
    {icon: "file-document", label: "Order", path: "order"},
    {icon: "clipboard-text", label: "Projects", path: "projects"},
    {icon: "truck-fast", label: "Delivery", path: "delivery"},
    {icon: "store", label: "Shop", path: "shop"},
    {icon: "account", label: "Profile", path: "profile"},
]