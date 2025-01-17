import { Component, OnInit } from '@angular/core';
import { TrainingCenterService } from 'app/services/training-center.service';
import { NotificationsService } from 'app/services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-center-edit',
  templateUrl: './training-center-edit.component.html',
  styleUrls: ['./training-center-edit.component.css']
})
export class TrainingCenterEditComponent {

  constructor(private trainingCenterService : TrainingCenterService,
    private notificationsService :NotificationsService,
    private router : Router) {
    if (!this.trainingCenterService.formModel.value._id) {
      this.router.navigateByUrl('training-centers/list')
    }else{
      console.log(this.trainingCenterService.formModel.value.startDate);  
    }
   }

  onSubmit(){
    console.log("this.formModel.value : ",this.trainingCenterService.formModel.value)
    this.trainingCenterService.editById(this.trainingCenterService.formModel.value._id,this.trainingCenterService.formModel.value)
    .subscribe(response=>{
      console.log("Edited successfully : ",response)
      this.notificationsService.showNotification('success','Successful Edition - Session Successfully Edited.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
