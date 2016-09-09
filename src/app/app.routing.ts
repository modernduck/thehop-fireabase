import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, LogoutComponent }      from './login';

import { CoursesComponent } from "./courses/courses.component";

const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path:'courses',
    component: CoursesComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
