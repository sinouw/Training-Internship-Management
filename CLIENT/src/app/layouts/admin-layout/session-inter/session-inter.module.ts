import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionInterRoutingModule } from './session-inter-routing.module';
import { SessionInterAddComponent } from './session-inter-add/session-inter-add.component';
import { SessionInterEditComponent } from './session-inter-edit/session-inter-edit.component';
import { SessionInterListComponent } from './session-inter-list/session-inter-list.component';
import { MaterialModule } from 'app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionParticipantComponent } from './session-participant/session-participant.component';
import { SessionCenterComponent } from './session-center/session-center.component';


@NgModule({
  declarations: [SessionInterAddComponent, SessionInterEditComponent, SessionInterListComponent, SessionParticipantComponent, SessionCenterComponent],
  imports: [
    CommonModule,
    SessionInterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SessionInterModule { }
