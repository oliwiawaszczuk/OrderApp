export interface MenuItem {
    label: string,
    screen: string,
}

export interface MenuSection {
    title: string,
    screen: string,
    items: MenuItem[],
}