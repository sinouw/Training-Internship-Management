import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'app/services/account.service';
import { Router } from '@angular/router';
import { InternshipService } from 'app/services/internship.service';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-intern-internship',
  templateUrl: './intern-internship.component.html',
  styleUrls: ['./intern-internship.component.css']
})
export class InternInternshipComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'title','status','createdAt'];

  constructor(private accountService : AccountService,
    private usersService : UsersService,
    private internshipService : InternshipService,
    private router : Router) { 
    let token =this.accountService.getDecodedToken();
    let currentRoles = token.roles;
    let currentUserId = token.sub;
    let isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
    if(isAdmin) this.getAllForAdmin()
    else this.getAllForAdmin()
  }

  applyFilter(filterValue: string) {
    this.usersService.internshipsDataSource.filter = filterValue.trim().toLowerCase();
    if (this.usersService.internshipsDataSource.paginator) {
      this.usersService.internshipsDataSource.paginator.firstPage();
    }
  }

  getAllForAdmin() {
    this.internshipService.getAll()
    .subscribe((response : any)=>{
      console.log("internships : ",response)
     let formModel = this.usersService.formModel.value
     if (formModel && formModel.internships && formModel.internships.length>0) {
      response.map(x=>{
        if (formModel.internships.includes(x._id)) {
          x.checked = true
        }
      })
     }else{
       response.map(x=>x.checked = false)
     }
     this.usersService.internshipsDataSource = new MatTableDataSource(response);
    this.usersService.internshipsDataSource.paginator = this.paginator;
    })
  }

}
