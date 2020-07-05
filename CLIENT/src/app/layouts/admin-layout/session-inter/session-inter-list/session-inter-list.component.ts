import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SessionInterService } from 'app/services/session-inter.service';
import { AccountService } from 'app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-inter-list',
  templateUrl: './session-inter-list.component.html',
  styleUrls: ['./session-inter-list.component.css']
})
export class SessionInterListComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'title', 'pu_ht', 'location' , 'startDate', 'endDate','status', 'createdAt', 'action'];

  constructor(private sessionInterService : SessionInterService,
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
    this.sessionInterService.getAll()
    .subscribe((response : any)=>{
     console.log("sessions : ",response)
     this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    })
  }

  editById(body){
    this.sessionInterService.fillFormModel(body)
    this.router.navigateByUrl('/sessions-inter/edit')
  }

  deleteById(id,index){
    this.sessionInterService.deleteById(id)
    .subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      },
    );
  }

}
