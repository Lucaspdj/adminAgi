import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },{
        path: '/views/financeiro',
        title: 'Financeiro',
        type: 'link',
        icontype: 'timeline'

    },{
        path: '/views/agenda',
        title: 'Agenda',
        type: 'link',
        icontype: 'date_range'
    },
    {
        path: '/views/profissionais',
        title: 'Profissionais',
        type: 'link',
        icontype: 'dashboard'
    },
    {
        path: '/views',
        title: 'Serviços e tipos',
        type: 'sub',
        icontype: 'apps',
        collapse: 'components',
        children: [
            {path: 'servicostipo', title: 'Tipos de serviços', ab:'TS'},
            {path: 'servicos', title: 'Serviços', ab:'S'},
        ]
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
