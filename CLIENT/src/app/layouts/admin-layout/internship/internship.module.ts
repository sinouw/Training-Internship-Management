import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternshipRoutingModule } from './internship-routing.module';
import { InternshipAddComponent } from './internship-add/internship-add.component';
import { InternshipEditComponent } from './internship-edit/internship-edit.component';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { MaterialModule } from 'app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InternshipAddComponent, InternshipEditComponent, InternshipListComponent],
  imports: [
    CommonModule,
    InternshipRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class InternshipModule { }
