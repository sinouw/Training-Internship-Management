import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { UsersService } from 'app/services/users.service';
import { NotificationsService } from 'app/services/notifications.service';
import { LevelService } from 'app/services/level.service';
import { UniversityService } from 'app/services/university.service';

@Component({
  selector: 'app-intern-add',
  templateUrl: './intern-add.component.html',
  styleUrls: ['./intern-add.component.css']
})
export class InternAddComponent {

  @ViewChild('regForm', {static: false}) myForm: NgForm;
  
  roles: any = ["intern"]
  levels: any = []
  universities: any = []

  constructor(
    private usersService : UsersService,
    private universityService: UniversityService,
    private levelService : LevelService,
    private notificationsService: NotificationsService) { 
      this.usersService.createFormModel()
      this.getAllLevels()
      this.getAllUniversities()
    }

    getAllLevels() {
      this.levelService.getAll()
      .subscribe((response : any)=>{
       console.log("levels: ",response)
        this.levels = response
      })
    }

    getAllUniversities() {
      this.universityService.getAll()
      .subscribe((response : any)=>{
       console.log("levels: ",response)
        this.universities = response
      })
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

    let internships = []
    this.usersService.internshipsDataSource.data.map((x:any)=>{
      if (x.checked) {
        internships.push(x._id)
      }
    })
    
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
      internships:internships,
      roles:this.roles,
      levelId: this.usersService.formModel.value.levelId,
      universityId: this.usersService.formModel.value.universityId,
      status: this.usersService.formModel.value.status,
    }
    debugger

    this.usersService.createNew(body).subscribe(
      (response: any) => {
        console.log("Added Agent :", response)
        this.notificationsService.showNotification('success', 'Successful Addition - Intern Successfully Added.')
        this.usersService.formModel.reset(), 
        this.myForm.resetForm();
        this.usersService.formModel.patchValue({
          createdAt : new Date().toISOString().slice(0, 16),
          status : false,
        })
        this.usersService.internshipsDataSource.data.map((x:any)=>x.checked = false)

      },
      err => {
        console.log("err : ", err)
        this.notificationsService.showNotification('danger', 'Something Wrong - Please Enter Valid Username and Password.')
      }
    );
  }

}
