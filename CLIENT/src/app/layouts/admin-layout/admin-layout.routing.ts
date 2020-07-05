import { InternModule } from './intern/intern.module';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    // { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',   component: UserProfileComponent },
    { path:'events',loadChildren:()=> import('../../layouts/admin-layout/events/events.module').then(m=>m.EventsModule)},
    { path:'agents',loadChildren:()=> import('../../layouts/admin-layout/agents/agents.module').then(m=>m.AgentsModule)},
    
    { path:'employees',loadChildren:()=> import('../../layouts/admin-layout/employee/employee.module').then(m=>m.EmployeeModule)},
    { path:'sessions-inter',loadChildren:()=> import('../../layouts/admin-layout/session-inter/session-inter.module').then(m=>m.SessionInterModule)},
    { path:'training-centers',loadChildren:()=> import('../../layouts/admin-layout/training-center/training-center.module').then(m=>m.TrainingCenterModule)},
    
    { path:'interns',loadChildren:()=> import('../../layouts/admin-layout/intern/intern.module').then(m=>m.InternModule)},
    { path:'universities',loadChildren:()=> import('../../layouts/admin-layout/University/university.module').then(m=>m.UniversityModule)},
    { path:'levels',loadChildren:()=> import('../../layouts/admin-layout/level/level.module').then(m=>m.LevelModule)},
    { path:'internships',loadChildren:()=> import('../../layouts/admin-layout/internship/internship.module').then(m=>m.InternshipModule)},
];
