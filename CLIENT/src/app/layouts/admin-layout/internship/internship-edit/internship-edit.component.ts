import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'app/services/notifications.service';
import { Router } from '@angular/router';
import { InternshipService } from 'app/services/internship.service';

@Component({
  selector: 'app-internship-edit',
  templateUrl: './internship-edit.component.html',
  styleUrls: ['./internship-edit.component.css']
})
export class InternshipEditComponent {

  constructor(private internshipService : InternshipService,
    private notificationsService :NotificationsService,
    private router : Router) {
    if (!this.internshipService.formModel.value._id) {
      this.router.navigateByUrl('internships/list')
    }else{
      console.log(this.internshipService.formModel.value.startDate);  
    }
   }

  onSubmit(){
    console.log("this.formModel.value : ",this.internshipService.formModel.value)
    this.internshipService.editById(this.internshipService.formModel.value._id,this.internshipService.formModel.value)
    .subscribe(response=>{
      console.log("Edited successfully : ",response)
      this.notificationsService.showNotification('success','Successful Edition - Internship Successfully Edited.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }
}
