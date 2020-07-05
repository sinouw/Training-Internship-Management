import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityAddComponent } from './university-add/university-add.component';
import { UniversityEditComponent } from './university-edit/university-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: UniversityListComponent },
  { path: 'add', component: UniversityAddComponent },
  { path: 'edit', component: UniversityEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
