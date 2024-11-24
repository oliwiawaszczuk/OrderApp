import {MenuItem, MenuSection} from "@/constants/types/IMenu";

export const createMenuItem = (label: string, screen: string): MenuItem => ({
    label,
    screen,
});

export const createMenuSection = (title: string, screen: string, items: MenuItem[]): MenuSection => ({
    title,
    screen,
    items,
});

export const menuData: MenuSection[] = [
    createMenuSection('Order', "/order", [
        createMenuItem('New order', '/order/makeNewProject'),
        createMenuItem('Use old project', '/order/useOldProject'),
        createMenuItem('Do without project', '/order/doWithoutProject'),
    ]),
    createMenuSection('Project', "/project", [
        createMenuItem('Order history', '/project/orderHistory'),
    ]),
    createMenuSection('Delivery', "/delivery", [
        createMenuItem('New delivery', '/delivery/newDelivery'),
    ]),
    createMenuSection('Shop', "/shop/", [
        createMenuItem('Search by category', '/shop/categories'),
        createMenuItem('Add product', '/shop/'),
        createMenuItem('Your products', '/shop/'),
    ]),
    createMenuSection('Profile', "/profile", [
        createMenuItem('Raport and analysis', '/profile/'),
        createMenuItem('See your activity', '/profile/'),
        createMenuItem('Settings', '/profile/settings'),
    ]),
    createMenuSection('Raport', "/raport", [
        createMenuItem('Generate raport', '/raport/'),
        createMenuItem('See raports', '/raport/'),
        createMenuItem('See visualisation', '/raport/'),
    ]),
    createMenuSection('Log out', "", []),
];