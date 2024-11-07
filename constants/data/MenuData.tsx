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
  createMenuSection('Shop', "", [
    createMenuItem('Search by category', ''),
    createMenuItem('Add product', ''),
    createMenuItem('Your products', ''),
  ]),
  createMenuSection('Profile', "", [
    createMenuItem('Raport and analysis', ''),
    createMenuItem('See your activity', ''),
    createMenuItem('Settings', ''),
  ]),
  createMenuSection('Raport', "", [
    createMenuItem('Generate raport', ''),
    createMenuItem('See raports', ''),
    createMenuItem('See visualisation', ''),
  ]),
  createMenuSection('Log out', "", []),
];