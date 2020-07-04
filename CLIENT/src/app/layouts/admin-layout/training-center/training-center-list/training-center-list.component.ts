import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TrainingCenterService } from 'app/services/training-center.service';
import { AccountService } from 'app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-center-list',
  templateUrl: './training-center-list.component.html',
  styleUrls: ['./training-center-list.component.css']
})
export class TrainingCenterListComponent {

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'title', 'location','status', 'createdAt', 'action'];

  constructor(private trainingCenterService : TrainingCenterService,
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
     console.log("training center : ",response)
     this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    })
  }

  editById(body){
    this.trainingCenterService.fillFormModel(body)
    this.router.navigateByUrl('/training-centers/edit')
  }

  deleteById(id,index){
    this.trainingCenterService.deleteById(id)
    .subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        // this.toastr.info('House Suppression !', 'House deleted successfully.');
      },
      err => {
        console.log(err);
      },
    );
  }

}
