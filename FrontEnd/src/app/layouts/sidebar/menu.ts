import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        link: '/',
        parentId: 2
    },
    {
        id: 3,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/',

    },
    {
        id: 4,
        label: 'MENUITEMS.MARCACOES.TEXT',
        icon: 'bx-file',
        link: '/',

    },
    {
        id: 4,
        label: 'MENUITEMS.CLIENTES.TEXT',
        icon: 'bxs-user-detail',
        link: '/',

    },
];

