import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

export const ROUTES: any[] = [
    // { role :'admin', path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/events/calendar', title: "Calendar",  icon:'event', class: '' },
    { path: '/profile', title: "User Profile",  icon:'person', class: '' },

    { role :['admin'], path: '/universities/list', title: "Universities List",  icon:'business', class: '' },
    { role :['admin'], path: '/levels/list', title: "Levels List",  icon:'layers', class: '' },
    { role :['admin'], path: '/agents/list', title: "Admins List",  icon:'people', class: '' },
    
    { role :['admin','rhadmin'], path: '/sessions-inter/list', title: "Sessions Inter List",  icon:'event_note', class: '' },
    { role :['admin','rhadmin'], path: '/training-centers/list', title: "Training Centers List",  icon:'account_balance', class: '' },
    { role :['admin','rhadmin'], path: '/employees/list', title: "Employees List",  icon:'people', class: '' },
    
    
    { role :['admin','intadmin'], path: '/internships/list', title: "Internships List",  icon:'article', class: '' },
    { role :['admin','intadmin'], path: '/interns/list', title: "Inters List",  icon:'people', class: '' },

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
    let isRHAdmin = currentRoles.some(role => role == "rhadmin");
    let isINTAdmin = currentRoles.some(role => role == "intadmin");
    if (this.isAdmin) {
      this.menuItems = ROUTES.map(x=>x)
    }
    else if (isRHAdmin){
      this.menuItems = ROUTES.filter(menuItem => !menuItem.role || menuItem.role.includes("rhadmin"));
    }
    else if (isINTAdmin){
      this.menuItems = ROUTES.filter(menuItem => !menuItem.role || menuItem.role.includes("intadmin"));
    }
    else{
      this.menuItems = ROUTES.filter(menuItem => !menuItem.role);
      
    }
  }
  ngOnInit(): void {

  }


  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
