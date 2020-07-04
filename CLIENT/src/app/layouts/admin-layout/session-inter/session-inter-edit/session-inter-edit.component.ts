import { Component, OnInit } from '@angular/core';
import { SessionInterService } from 'app/services/session-inter.service';
import { NotificationsService } from 'app/services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-inter-edit',
  templateUrl: './session-inter-edit.component.html',
  styleUrls: ['./session-inter-edit.component.css']
})
export class SessionInterEditComponent {

  constructor(private sessionInterService : SessionInterService,
    private notificationsService :NotificationsService,
    private router : Router) {
    if (!this.sessionInterService.formModel.value._id) {
      this.router.navigateByUrl('sessions-inter/list')
    }else{
      // console.log("formModel : ",this.sessionInterService.formModel.value)

      this.sessionInterService.formModel.patchValue({
        startDate : new Date(this.sessionInterService.formModel.value.startDate).toISOString().slice(0, 16),
        endDate : new Date(this.sessionInterService.formModel.value.endDate).toISOString().slice(0, 16),
      })
      console.log(this.sessionInterService.formModel.value.startDate);  
    }
   }

  onSubmit(){
    console.log("this.formModel.value : ",this.sessionInterService.formModel.value)
    this.sessionInterService.editById(this.sessionInterService.formModel.value._id,this.sessionInterService.formModel.value)
    .subscribe(response=>{
      console.log("Edited successfully : ",response)
      this.notificationsService.showNotification('success','Successful Edition - Session Successfully Edited.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
