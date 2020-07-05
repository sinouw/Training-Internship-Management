import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'app/services/notifications.service';
import { InternshipService } from 'app/services/internship.service';

@Component({
  selector: 'app-internship-add',
  templateUrl: './internship-add.component.html',
  styleUrls: ['./internship-add.component.css']
})
export class InternshipAddComponent {

  @ViewChild('regForm', {static: false}) myForm: NgForm;

  constructor(
    private internshipService : InternshipService,
    private notificationsService :NotificationsService,
  ) { 
    this.internshipService.createFormModel()
  }

  onSubmit(){
    console.log("this.formModel.value : ",this.internshipService.formModel.value)
    this.internshipService.createNew(this.internshipService.formModel.value)
    .subscribe(response=>{
      console.log("Added successfully : ",response)
      this.notificationsService.showNotification('success','Successful Addition - Internship Successfully Added.')
      this.internshipService.formModel.reset(), 
      this.myForm.resetForm();
      this.internshipService.formModel.patchValue({
        createdAt : new Date().toISOString().slice(0, 16),
        status : false,
      })

    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
