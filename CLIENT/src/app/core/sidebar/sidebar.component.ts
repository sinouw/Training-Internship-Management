import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

export const ROUTES: any[] = [
    // { role :'admin', path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/events/calendar', title: "Calendar",  icon:'event', class: '' },
    // { role :'admin', path: '/events/list', title: "Events List",  icon:'event_note', class: '' },
    { role :'admin', path: '/sessions-inter/list', title: "Sessions Inter List",  icon:'event_note', class: '' },
    { role :'admin', path: '/training-centers/list', title: "Training Centers List",  icon:'account_balance', class: '' },
    { role :'admin', path: '/universities/list', title: "Universities List",  icon:'business', class: '' },
    { role :'admin', path: '/levels/list', title: "Levels List",  icon:'layers', class: '' },
    { role :'admin', path: '/internships/list', title: "Internships List",  icon:'article', class: '' },
    { role :'admin', path: '/agents/list', title: "Employees List",  icon:'people', class: '' },
    { role :'admin', path: '#', title: "Inters List",  icon:'people', class: '' },
    { path: '/profile', title: "User Profile",  icon:'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isAdmin: any= "";

  constructor(private accountService : AccountService){
        let token =this.accountService.getDecodedToken();
    let currentRoles = token.roles;
    this.isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
  }
  ngOnInit(): void {
    if (!this.isAdmin) {
      this.menuItems = ROUTES.filter(menuItem => !menuItem.role);
    }else{
      this.menuItems = ROUTES.map(x=>x)
      
    }
  }


  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
