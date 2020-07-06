import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'app/services/notifications.service';
import { ValidationErrors } from '@angular/forms';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-intern-edit',
  templateUrl: './intern-edit.component.html',
  styleUrls: ['./intern-edit.component.css']
})
export class InternEditComponent {

  roles: any = ["intern"]
  levels : any = [];

  constructor(
    private usersService: UsersService,
    private levelService: LevelService,
    private router: Router,
    private notificationsService: NotificationsService) {
    if (!this.usersService.formModel.value._id) {
      this.router.navigateByUrl('interns/list')
    } else {
      delete this.usersService.formModel.value.passwords
      console.log("formModel : ", this.usersService.formModel.value)
    }
  }

  getFormValidationErrors() {
    Object.keys(this.usersService.formModel.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.usersService.formModel.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  getAllLevels() {
    this.levelService.getAll()
    .subscribe((response : any)=>{
     console.log("levels: ",response)
      this.levels = response
    })
  }


  onSubmit() {
    this.getFormValidationErrors()

    console.log("this.formModel.value : ",this.usersService.formModel.value)
    let internships = []
    this.usersService.internshipsDataSource.data.map((x:any)=>{
      if (x.checked) {
        internships.push(x._id)
      }
    })
    
    let body = {
      firstname: this.usersService.formModel.value.firstname,
      username: this.usersService.formModel.value.username,
      lastname: this.usersService.formModel.value.lastname,
      phone: this.usersService.formModel.value.phone,
      email: this.usersService.formModel.value.email,
      roles: this.roles,
      status: this.usersService.formModel.value.status,
      internships :internships
    }

    this.usersService.editById(this.usersService.formModel.value._id,body).subscribe(
      (response: any) => {
        console.log("Edited Agent :", response)
        this.notificationsService.showNotification('success', 'Successful Edition - Intern Successfully Edited.')
      },
      err => {
        console.log("err : ", err)
        this.notificationsService.showNotification('danger', 'Something Wrong - Please Enter Valid Username and Password.')
      }
    );
  }

}
