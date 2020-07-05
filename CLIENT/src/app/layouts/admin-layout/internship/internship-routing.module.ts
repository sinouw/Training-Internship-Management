import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { InternshipAddComponent } from './internship-add/internship-add.component';
import { InternshipEditComponent } from './internship-edit/internship-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: InternshipListComponent },
  { path: 'add', component: InternshipAddComponent },
  { path: 'edit', component: InternshipEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipRoutingModule { }
