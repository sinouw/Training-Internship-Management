import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'app/services/notifications.service';
import { Router } from '@angular/router';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-level-edit',
  templateUrl: './level-edit.component.html',
  styleUrls: ['./level-edit.component.css']
})
export class LevelEditComponent {

  constructor(private levelService : LevelService,
    private notificationsService :NotificationsService,
    private router : Router) {
    if (!this.levelService.formModel.value._id) {
      this.router.navigateByUrl('levels/list')
    }else{
      console.log(this.levelService.formModel.value.startDate);  
    }
   }

  onSubmit(){
    console.log("this.formModel.value : ",this.levelService.formModel.value)
    this.levelService.editById(this.levelService.formModel.value._id,this.levelService.formModel.value)
    .subscribe(response=>{
      console.log("Edited successfully : ",response)
      this.notificationsService.showNotification('success','Successful Edition - Level Successfully Edited.')
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}
