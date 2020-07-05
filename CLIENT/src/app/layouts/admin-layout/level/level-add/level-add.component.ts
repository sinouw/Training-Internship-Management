import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'app/services/notifications.service';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-level-add',
  templateUrl: './level-add.component.html',
  styleUrls: ['./level-add.component.css']
})
export class LevelAddComponent {

  @ViewChild('regForm', {static: false}) myForm: NgForm;

  constructor(
    private levelService : LevelService,
    private notificationsService :NotificationsService,
  ) { 
    this.levelService.createFormModel()
  }

  onSubmit(){
    console.log("this.formModel.value : ",this.levelService.formModel.value)
    this.levelService.createNew(this.levelService.formModel.value)
    .subscribe(response=>{
      console.log("Added successfully : ",response)
      this.notificationsService.showNotification('success','Successful Addition - Level Successfully Added.')
      this.levelService.formModel.reset(), 
      this.myForm.resetForm();
      this.levelService.formModel.patchValue({
        createdAt : new Date().toISOString().slice(0, 16),
        status : false,
      })
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
