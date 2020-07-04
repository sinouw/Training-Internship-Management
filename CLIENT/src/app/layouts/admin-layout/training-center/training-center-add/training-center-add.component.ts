import { Component, OnInit } from '@angular/core';
import { TrainingCenterService } from 'app/services/training-center.service';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-training-center-add',
  templateUrl: './training-center-add.component.html',
  styleUrls: ['./training-center-add.component.css']
})
export class TrainingCenterAddComponent {

  constructor(
    private trainingCenterService : TrainingCenterService,
    private notificationsService :NotificationsService,
  ) { 
    this.trainingCenterService.createFormModel()
  }

  onSubmit(){
    console.log("this.formModel.value : ",this.trainingCenterService.formModel.value)
    this.trainingCenterService.createNew(this.trainingCenterService.formModel.value)
    .subscribe(response=>{
      console.log("Added successfully : ",response)
      this.notificationsService.showNotification('success','Successful Addition - Training Center Successfully Added.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}