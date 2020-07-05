import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'app/services/account.service';
import { UsersService } from 'app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'phone', 'roles', 'status', 'createdAt', 'action'];

  constructor(private accountService : AccountService,
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
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllForAdmin() {
    this.usersService.getEmployeesAll()
    .subscribe((response : any)=>{
     console.log("users : ",response)
     this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    })
  }

  editById(body){
    this.usersService.fillFormModel(body)
    this.router.navigateByUrl('/employees/edit')
  }

  deleteById(id,index){
    this.usersService.deleteById(id)
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
