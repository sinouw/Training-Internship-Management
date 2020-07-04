import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingCenterListComponent } from './training-center-list/training-center-list.component';
import { TrainingCenterAddComponent } from './training-center-add/training-center-add.component';
import { TrainingCenterEditComponent } from './training-center-edit/training-center-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TrainingCenterListComponent },
  { path: 'add', component: TrainingCenterAddComponent },
  { path: 'edit', component: TrainingCenterEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingCenterRoutingModule { }
