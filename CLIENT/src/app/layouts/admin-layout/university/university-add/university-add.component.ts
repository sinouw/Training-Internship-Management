import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'app/services/notifications.service';
import { UniversityService } from 'app/services/university.service';

@Component({
  selector: 'app-university-add',
  templateUrl: './university-add.component.html',
  styleUrls: ['./university-add.component.css']
})
export class UniversityAddComponent {

  @ViewChild('regForm', {static: false}) myForm: NgForm;

  constructor(
    private universityService : UniversityService,
    private notificationsService :NotificationsService,
  ) { 
    this.universityService.createFormModel()
  }

  onSubmit(){
    console.log("this.formModel.value : ",this.universityService.formModel.value)
    this.universityService.createNew(this.universityService.formModel.value)
    .subscribe(response=>{
      console.log("Added successfully : ",response)
      this.notificationsService.showNotification('success','Successful Addition - Universities Successfully Added.')
      this.universityService.formModel.reset(), 
      this.myForm.resetForm();
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
