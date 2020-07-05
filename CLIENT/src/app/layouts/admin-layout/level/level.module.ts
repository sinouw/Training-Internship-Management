import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelRoutingModule } from './level-routing.module';
import { LevelListComponent } from './level-list/level-list.component';
import { LevelAddComponent } from './level-add/level-add.component';
import { LevelEditComponent } from './level-edit/level-edit.component';
import { MaterialModule } from 'app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LevelListComponent, LevelAddComponent, LevelEditComponent],
  imports: [
    CommonModule,
    LevelRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LevelModule { }
