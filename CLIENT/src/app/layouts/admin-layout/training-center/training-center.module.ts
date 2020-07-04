import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingCenterRoutingModule } from './training-center-routing.module';
import { TrainingCenterAddComponent } from './training-center-add/training-center-add.component';
import { TrainingCenterEditComponent } from './training-center-edit/training-center-edit.component';
import { TrainingCenterListComponent } from './training-center-list/training-center-list.component';
import { MaterialModule } from 'app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrainingCenterAddComponent,
    TrainingCenterEditComponent,
    TrainingCenterListComponent,
  ],
  imports: [
    CommonModule,
    TrainingCenterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TrainingCenterModule { }
