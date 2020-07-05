import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternListComponent } from './intern-list/intern-list.component';
import { InternAddComponent } from './intern-add/intern-add.component';
import { InternEditComponent } from './intern-edit/intern-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: InternListComponent },
  { path: 'add', component: InternAddComponent },
  { path: 'edit', component: InternEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule { }
