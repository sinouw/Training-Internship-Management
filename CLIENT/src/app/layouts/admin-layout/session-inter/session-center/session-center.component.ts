import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TrainingCenterService } from 'app/services/training-center.service';
import { AccountService } from 'app/services/account.service';
import { Router } from '@angular/router';
import { SessionInterService } from 'app/services/session-inter.service';

@Component({
  selector: 'app-session-center',
  templateUrl: './session-center.component.html',
  styleUrls: ['./session-center.component.css']
})
export class SessionCenterComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'title', 'location','status', 'createdAt'];

  constructor(
    private trainingCenterService : TrainingCenterService,
    private sessionInterService : SessionInterService,
    private accountService : AccountService,
    private router : Router) { 
    let token =this.accountService.getDecodedToken();
    let currentRoles = token.roles;
    let currentUserId = token.sub;
    let isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
    if(isAdmin) this.getAllForAdmin()
    else this.getAllForAdmin()

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllForAdmin() {
    this.trainingCenterService.getAll()
    .subscribe((response : any)=>{
     console.log("centers : ",response)
     console.log("form.value : ",this.sessionInterService.formModel.value)
     let formModel = this.sessionInterService.formModel.value
     if (formModel && formModel.centersList && formModel.centersList.length>0) {
      response.map(x=>{
        if (formModel.centersList.includes(x._id)) {
          x.checked = true
        }
      })
     }else{
       response.map(x=>x.checked = false)
     }
     this.sessionInterService.centersDataSource = new MatTableDataSource(response);
    this.sessionInterService.centersDataSource.paginator = this.paginator;
    })
  }

}
