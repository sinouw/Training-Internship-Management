import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class SessionInterService {

  constructor(private http: HttpClient,private formBuilder : FormBuilder) { 
    this.createFormModel()
  }
  BaseURI = environment.apiUrl+"session-inter";

  formModel : FormGroup
  participantsDataSource = new MatTableDataSource();
  centersDataSource = new MatTableDataSource();
  
  fillFormModel(body){
    this.formModel.patchValue({
      _id: body._id,
      title: body.title,
      pu_ht: body.pu_ht,
      location: body.location,
      startDate : body.startDate,
      endDate : body.endDate,
      status : body.status,
      centersList : body.centersList,
      participants : body.participants,
      createdAt: body.createdAt,
    })
  }

  createFormModel() {
    this.formModel = this.formBuilder.group({
      _id: '',
      title: ['', [Validators.required]],
      pu_ht: ['', [Validators.required]],
      centersList: [],
      participants: [],
      location: ['', [Validators.required]],
      startDate : [new Date(), [Validators.required]],
      endDate : [new Date(), [Validators.required]],
      status : [false, [Validators.required]],
      createdAt: [new Date(), [Validators.required]],
    })
  }

  getAll(){
    return this.http.get(this.BaseURI+'/getAll')
  }
  
  getById(id : string){
    return this.http.get(this.BaseURI+'/'+id)
  }

  checkExists(id : string){
    return this.http.get(this.BaseURI+'/check/'+id)
  }

  createNew(body){
    delete this.formModel.value._id
    return this.http.post(this.BaseURI+'/create',body)
  }

  editById(id : string , body){
    return this.http.put(this.BaseURI+'/update/'+id,body)
  }

  deleteById(id){
    return this.http.delete(this.BaseURI+'/delete/'+id)
  }
}
