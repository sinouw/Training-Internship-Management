import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
import { InternAddComponent } from './intern-add/intern-add.component';
import { InternEditComponent } from './intern-edit/intern-edit.component';
import { InternListComponent } from './intern-list/intern-list.component';
import { MaterialModule } from 'app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternInternshipComponent } from './intern-internship/intern-internship.component';


@NgModule({
  declarations: [InternAddComponent, InternEditComponent, InternListComponent, InternInternshipComponent],
  imports: [
    CommonModule,
    InternRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class InternModule { }
