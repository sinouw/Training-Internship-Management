import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionInterListComponent } from './session-inter-list/session-inter-list.component';
import { SessionInterAddComponent } from './session-inter-add/session-inter-add.component';
import { SessionInterEditComponent } from './session-inter-edit/session-inter-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SessionInterListComponent },
  { path: 'add', component: SessionInterAddComponent },
  { path: 'edit', component: SessionInterEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionInterRoutingModule { }
