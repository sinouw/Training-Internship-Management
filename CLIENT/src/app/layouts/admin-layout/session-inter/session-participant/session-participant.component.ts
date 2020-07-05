import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'app/services/account.service';
import { UsersService } from 'app/services/users.service';
import { Router } from '@angular/router';
import { SessionInterService } from 'app/services/session-inter.service';

@Component({
  selector: 'app-session-participant',
  templateUrl: './session-participant.component.html',
  styleUrls: ['./session-participant.component.css']
})
export class SessionParticipantComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'phone', 'roles',  'createdAt'];

  constructor(private accountService : AccountService,
    private sessionInterService : SessionInterService,
    private usersService : UsersService,
    private router : Router) { 
    let token =this.accountService.getDecodedToken();
    let currentRoles = token.roles;
    let currentUserId = token.sub;
    let isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
    if(isAdmin) this.getAllForAdmin()
    else this.getAllForAdmin()
  }

  applyFilter(filterValue: string) {
    this.sessionInterService.participantsDataSource.filter = filterValue.trim().toLowerCase();
    if (this.sessionInterService.participantsDataSource.paginator) {
      this.sessionInterService.participantsDataSource.paginator.firstPage();
    }
  }

  getAllForAdmin() {
    this.usersService.getAll()
    .subscribe((response : any)=>{
     console.log("users : ",response)
     console.log("form.value : ",this.sessionInterService.formModel.value)
     let formModel = this.sessionInterService.formModel.value
     if (formModel && formModel.participants && formModel.participants.length>0) {
      response.map(x=>{
        if (formModel.participants.includes(x._id)) {
          x.checked = true
        }
      })
     }else{
       response.map(x=>x.checked = false)
     }
     this.sessionInterService.participantsDataSource = new MatTableDataSource(response);
    this.sessionInterService.participantsDataSource.paginator = this.paginator;
    })
  }

  toggleChange(){
    console.log("hello world",this.sessionInterService.participantsDataSource.data)
  }
}
