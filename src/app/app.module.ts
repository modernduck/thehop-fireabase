import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule, Renderer } from '@angular/core';
import { AppComponent }  from './app.component';
import { LoginComponent, LogoutComponent } from "./login"
import { CoursesComponent, DaysNumber2ObjectPipe, CoursesDayDisplayComponent, CoursesTeacherDisplayComponent, CoursesSignupButtonComponent, CoursesFormComponent, CoursesGroupFormComponent, CoursesDayFormComponent, CourseTypeComponent, CoursesDetailComponent } from './courses'
import { ProfileComponent, ProfileEditComponent } from "./profile"
import { GroupComponent, GroupFormComponent,GroupJoinedDisplayComponent,  GroupFinderComponent } from "./group"
import { MenuComponent, MenuLoginComponent } from "./menu/"
import { UsersFinderComponent, FilterByUserAttributePipe, FilterByUserGroupPipe } from "./users"
import { CheckoutComponent, CheckoutBarComponent } from "./checkout"
import { AngularFireModule,AuthProviders, AuthMethods , FIREBASE_PROVIDERS} from 'angularfire2';
import { LoginService } from "./login.service"
import { UploadService } from "./upload.service"
import { UserService } from "./user.service"
import { GroupService } from "./group.service"
import { CourseService } from "./course.service"
import { CartService } from "./cart.service"
import { routing } from './app.routing';
import { Object2ArrayPipe, ObjectTrue2ArrayPipe, FilterByAttributePipe } from "./app.pipe"

//directives
import { HighlightDirective  } from "./app.directives"

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCf9phOV3kk6HBiskayFjZ_4h8gFFgIQew",
  authDomain: "the-hop-firebase.firebaseapp.com",
  databaseURL: "https://the-hop-firebase.firebaseio.com",
  storageBucket: "the-hop-firebase.appspot.com"
}

const myFirebaseAuthConfig = {
  provider : AuthProviders.Google ,
  method : AuthMethods.Popup
}


@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
    
  ],
  providers:[
    FIREBASE_PROVIDERS,
    LoginService,
    UploadService,
    Renderer,
    UserService,
    GroupService,
    CourseService,
    CartService
  ],
  declarations: [ AppComponent, LoginComponent, CoursesComponent, MenuComponent,MenuLoginComponent, LogoutComponent, ProfileComponent, ProfileEditComponent, GroupComponent, Object2ArrayPipe, ObjectTrue2ArrayPipe, GroupFormComponent, UsersFinderComponent, GroupJoinedDisplayComponent, FilterByAttributePipe, FilterByUserAttributePipe, DaysNumber2ObjectPipe, CoursesDayDisplayComponent, CoursesTeacherDisplayComponent, CoursesSignupButtonComponent, CoursesFormComponent, FilterByUserGroupPipe, CoursesGroupFormComponent, HighlightDirective, CoursesDayFormComponent, GroupFinderComponent, CourseTypeComponent,CoursesDetailComponent, CheckoutComponent, CheckoutBarComponent ],
  bootstrap: [ AppComponent,
     
     
   ]
})
export class AppModule {}