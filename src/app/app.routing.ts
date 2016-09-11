import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, LogoutComponent }      from './login';
import { ProfileComponent, ProfileEditComponent } from "./profile"
import { CoursesComponent } from "./courses/courses.component";
import { GroupComponent } from "./group"

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
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/update',
    component: ProfileEditComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path:'courses',
    component: CoursesComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
