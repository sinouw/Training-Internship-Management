import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { UniversityAddComponent } from './university-add/university-add.component';
import { UniversityEditComponent } from './university-edit/university-edit.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { MaterialModule } from 'app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UniversityAddComponent, UniversityEditComponent, UniversityListComponent],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UniversityModule { }
