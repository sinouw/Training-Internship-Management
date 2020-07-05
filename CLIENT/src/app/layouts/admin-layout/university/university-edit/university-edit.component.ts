import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'app/services/notifications.service';
import { Router } from '@angular/router';
import { UniversityService } from 'app/services/university.service';

@Component({
  selector: 'app-university-edit',
  templateUrl: './university-edit.component.html',
  styleUrls: ['./university-edit.component.css']
})
export class UniversityEditComponent {

  constructor(private universityService : UniversityService,
    private notificationsService :NotificationsService,
    private router : Router) {
    if (!this.universityService.formModel.value._id) {
      this.router.navigateByUrl('universities/list')
    }else{
      console.log(this.universityService.formModel.value.startDate);  
    }
   }

  onSubmit(){
    console.log("this.formModel.value : ",this.universityService.formModel.value)
    this.universityService.editById(this.universityService.formModel.value._id,this.universityService.formModel.value)
    .subscribe(response=>{
      console.log("Edited successfully : ",response)
      this.notificationsService.showNotification('success','Successful Edition - University Successfully Edited.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
