import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private isAdmin: boolean = false;

    constructor(location: Location, private element: ElementRef, private router: Router,private accountService : AccountService) {
        this.location = location;
        this.sidebarVisible = false;
        let token = this.accountService.getDecodedToken();
        let currentRoles = token.roles;
        this.isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
    }

    ngOnInit() {
        var addionalRoutes = [
            { class: "", "icon": "layers", "path": "/events/edit", "title": "Edit Event" },
            { class: "", "icon": "layers", "path": "/events/add", "title": "Add Event" },

            { class: "", "icon": "layers", "path": "/agents/edit", "title": "Edit Admin" },
            { class: "", "icon": "layers", "path": "/agents/add", "title": "Add Admin" },

            { class: "", "icon": "layers", "path": "/sessions-inter/add", "title": "Add Session Inter" },
            { class: "", "icon": "layers", "path": "/sessions-inter/edit", "title": "Edit Session Inter" },

            { class: "", "icon": "layers", "path": "/training-centers/add", "title": "Add Training Center" },
            { class: "", "icon": "layers", "path": "/training-centers/edit", "title": "Edit Training Center" },
            
            { class: "", "icon": "layers", "path": "/universities/add", "title": "Add University" },
            { class: "", "icon": "layers", "path": "/universities/edit", "title": "Edit University" },
            
            { class: "", "icon": "layers", "path": "/levels/add", "title": "Add Levels" },
            { class: "", "icon": "layers", "path": "/levels/edit", "title": "Edit Level" },
            
            { class: "", "icon": "layers", "path": "/internships/add", "title": "Add Internship" },
            { class: "", "icon": "layers", "path": "/internships/edit", "title": "Edit Internship" },
            
            { class: "", "icon": "layers", "path": "/employees/add", "title": "Add Employee" },
            { class: "", "icon": "layers", "path": "/employees/edit", "title": "Edit Employee" },
            
            { class: "", "icon": "layers", "path": "/interns/add", "title": "Add Intern" },
            { class: "", "icon": "layers", "path": "/interns/edit", "title": "Edit Intern" },
        ]
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.listTitles = this.listTitles.concat(addionalRoutes)
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            var $layer: any = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function () { //asign a function
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle() {
        
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
}
