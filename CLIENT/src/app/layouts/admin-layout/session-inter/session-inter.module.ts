import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionInterRoutingModule } from './session-inter-routing.module';
import { SessionInterAddComponent } from './session-inter-add/session-inter-add.component';
import { SessionInterEditComponent } from './session-inter-edit/session-inter-edit.component';
import { SessionInterListComponent } from './session-inter-list/session-inter-list.component';
import { MaterialModule } from 'app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SessionInterAddComponent, SessionInterEditComponent, SessionInterListComponent],
  imports: [
    CommonModule,
    SessionInterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SessionInterModule { }
