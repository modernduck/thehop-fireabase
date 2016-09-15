import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, LogoutComponent }      from './login';
import { ProfileComponent, ProfileEditComponent } from "./profile"
import { CoursesComponent, CoursesFormComponent, CoursesDetailComponent } from "./courses";
import { GroupComponent, GroupFormComponent } from "./group"
import { CheckoutComponent } from "./checkout"

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
    component: CoursesDetailComponent
  },
  {
    path:'courses/edit/:key',
    component: CoursesFormComponent
  },
  {
    path:"checkout",
    component:CheckoutComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
