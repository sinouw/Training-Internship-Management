import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionInterService } from 'app/services/session-inter.service';
import { NotificationsService } from 'app/services/notifications.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-session-inter-add',
  templateUrl: './session-inter-add.component.html',
  styleUrls: ['./session-inter-add.component.css']
})
export class SessionInterAddComponent {

  @ViewChild('regForm', {static: false}) myForm: NgForm;

  
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

  resetForm(){
    this.sessionInterService.formModel.reset(), 
    this.myForm.resetForm();
    this.sessionInterService.formModel.patchValue({
      startDate : new Date().toISOString().slice(0, 16),
      endDate : new Date().toISOString().slice(0, 16),
      createdAt : new Date().toISOString().slice(0, 16),
      status : false,
    })
    this.sessionInterService.participantsDataSource.data.map((x:any)=>x.checked = false)
    this.sessionInterService.centersDataSource.data.map((x:any)=>x.checked = false)
  }

  onSubmit(){
    console.log("this.formModel.value : ",this.sessionInterService.formModel.value)
    let participants = []
    this.sessionInterService.participantsDataSource.data.map((x:any)=>{
      if (x.checked) {
        participants.push(x._id)
      }
    })
    this.sessionInterService.formModel.patchValue({ participants : participants})

    let centers = []
    this.sessionInterService.centersDataSource.data.map((x:any)=>{
      if (x.checked) {
        centers.push(x._id)
      }
    })
    this.sessionInterService.formModel.patchValue({ centersList : centers})
    
    this.sessionInterService.createNew(this.sessionInterService.formModel.value)
    .subscribe(response=>{
      console.log("Added successfully : ",response)
      this.resetForm()
      this.notificationsService.showNotification('success','Successful Addition - Session Successfully Added.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
