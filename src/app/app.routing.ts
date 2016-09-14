import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, LogoutComponent }      from './login';
import { ProfileComponent, ProfileEditComponent } from "./profile"
import { CoursesComponent, CoursesFormComponent } from "./courses";
import { GroupComponent, GroupFormComponent } from "./group"

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
    path: 'group/:slug',
    component: GroupFormComponent
  },
  {
    path:'courses',
    component: CoursesComponent
  },
  {
    path:'courses/:key',
    component: CoursesFormComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
