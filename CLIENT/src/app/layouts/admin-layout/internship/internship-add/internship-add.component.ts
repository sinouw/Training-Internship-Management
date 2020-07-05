import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingCenterService } from 'app/services/training-center.service';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-internship-add',
  templateUrl: './internship-add.component.html',
  styleUrls: ['./internship-add.component.css']
})
export class InternshipAddComponent {

  @ViewChild('regForm', {static: false}) myForm: NgForm;

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
      this.trainingCenterService.formModel.reset(), 
      this.myForm.resetForm();
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
