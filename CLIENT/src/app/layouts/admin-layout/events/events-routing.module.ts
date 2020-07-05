import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'calendar', component: EventsCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
