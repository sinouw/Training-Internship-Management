import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelListComponent } from './level-list/level-list.component';
import { LevelAddComponent } from './level-add/level-add.component';
import { LevelEditComponent } from './level-edit/level-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: LevelListComponent },
  { path: 'add', component: LevelAddComponent },
  { path: 'edit', component: LevelEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelRoutingModule { }
