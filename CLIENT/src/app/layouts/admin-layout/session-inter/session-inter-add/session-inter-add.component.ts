import { Component, OnInit } from '@angular/core';
import { SessionInterService } from 'app/services/session-inter.service';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-session-inter-add',
  templateUrl: './session-inter-add.component.html',
  styleUrls: ['./session-inter-add.component.css']
})
export class SessionInterAddComponent {

  
  constructor(
    private sessionInterService : SessionInterService,
    private notificationsService :NotificationsService,
  ) { 
    this.sessionInterService.createFormModel()
    this.sessionInterService.formModel.patchValue({
      startDate : new Date().toISOString().slice(0, 16),
      endDate : new Date().toISOString().slice(0, 16),
    })
  }

  onSubmit(){
    console.log("this.formModel.value : ",this.sessionInterService.formModel.value)
    this.sessionInterService.createNew(this.sessionInterService.formModel.value)
    .subscribe(response=>{
      console.log("Added successfully : ",response)
      this.notificationsService.showNotification('success','Successful Addition - Session Successfully Added.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
