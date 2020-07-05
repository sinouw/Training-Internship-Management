import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { UsersService } from 'app/services/users.service';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  @ViewChild('regForm', {static: false}) myForm: NgForm;
  
  roles: any = ["employee"]

  constructor(private usersService : UsersService,
    private notificationsService: NotificationsService) { 
      this.usersService.createFormModel()
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
    
    let body = {
      password : this.usersService.formModel.value.passwords.password,
      username : this.usersService.formModel.value.username,
      firstname:this.usersService.formModel.value.firstname,
      lastname:this.usersService.formModel.value.lastname,
      phone:this.usersService.formModel.value.phone,
      email:this.usersService.formModel.value.email,
      address:this.usersService.formModel.value.address,
      city:this.usersService.formModel.value.city,
      country:this.usersService.formModel.value.country,
      postalCode:this.usersService.formModel.value.postalCode,
      description:this.usersService.formModel.value.description,
      roles:this.usersService.formModel.value.roles,
      status: this.usersService.formModel.value.status,
    }
    debugger

    this.usersService.createNew(body).subscribe(
      (response: any) => {
        console.log("Added Agent :", response)
        this.notificationsService.showNotification('success', 'Successful Addition - Employee Successfully Added.')
        this.usersService.formModel.reset(), 
        this.myForm.resetForm();
        this.usersService.formModel.patchValue({
          createdAt : new Date().toISOString().slice(0, 16),
          status : false,
        })
      },
      err => {
        console.log("err : ", err)
        this.notificationsService.showNotification('danger', 'Something Wrong - Please Enter Valid Username and Password.')
      }
    );
  }

}
