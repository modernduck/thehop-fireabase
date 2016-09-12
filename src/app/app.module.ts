import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule, Renderer } from '@angular/core';
import { AppComponent }  from './app.component';
import { LoginComponent, LogoutComponent } from "./login"
import { CoursesComponent } from './courses/courses.component'
import { ProfileComponent, ProfileEditComponent } from "./profile"
import { GroupComponent, GroupFormComponent } from "./group"
import { MenuComponent, MenuLoginComponent } from "./menu/"
import { UsersFinderComponent } from "./users"
import { AngularFireModule,AuthProviders, AuthMethods , FIREBASE_PROVIDERS} from 'angularfire2';
import { LoginService } from "./login.service"
import { UploadService } from "./upload.service"
import { UserService } from "./user.service"
import { GroupService } from "./group.service"
import { routing } from './app.routing';
import { Object2ArrayPipe, ObjectTrue2ArrayPipe } from "./app.pipe"

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
    GroupService
  ],
  declarations: [ AppComponent, LoginComponent, CoursesComponent, MenuComponent,MenuLoginComponent, LogoutComponent, ProfileComponent, ProfileEditComponent, GroupComponent, Object2ArrayPipe, ObjectTrue2ArrayPipe, GroupFormComponent, UsersFinderComponent ],
  bootstrap: [ AppComponent,
     
     
   ]
})
export class AppModule {}