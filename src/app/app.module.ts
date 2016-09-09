
//import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';

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
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent,
     
     
   ]
})
export class AppModule {}