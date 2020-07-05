import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'app/services/notifications.service';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {

  roles: any = ["employee"]

  constructor(private usersService: UsersService,
    private router: Router,
    private notificationsService: NotificationsService) {
    if (!this.usersService.formModel.value._id) {
      this.router.navigateByUrl('employees/list')
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

  onSubmit() {
    this.getFormValidationErrors()
    
    let body = {
      firstname: this.usersService.formModel.value.firstname,
      username: this.usersService.formModel.value.username,
      lastname: this.usersService.formModel.value.lastname,
      phone: this.usersService.formModel.value.phone,
      email: this.usersService.formModel.value.email,
      roles: this.usersService.formModel.value.roles,
      status: this.usersService.formModel.value.status,
    }

    this.usersService.editById(this.usersService.formModel.value._id,body).subscribe(
      (response: any) => {
        console.log("Edited Agent :", response)
        this.notificationsService.showNotification('success', 'Successful Edition - Employee Successfully Edited.')
      },
      err => {
        console.log("err : ", err)
        this.notificationsService.showNotification('danger', 'Something Wrong - Please Enter Valid Username and Password.')
      }
    );
  }
}
