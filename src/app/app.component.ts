import { Injectable,Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseAuth } from 'angularfire2';
import { LoginService } from './login.service'
import { LoginComponent } from "./login/login.component"

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test:FirebaseObjectObservable<any>;
  current_user:FirebaseObjectObservable<any>;
  loginService:LoginService;
  
  constructor(private af: AngularFire,public auth: FirebaseAuth) {
    this.af = af;
    this.loginService = new LoginService(af, auth);  
  }
  getObject() {
    //this.test  = {name:'kuy'}
    this.af.database.object('/test').set({name:'yox'})
    //
    this.test = this.af.database.object('/test')
    
  
    //this.current_user = this.af.database.object('/users')
  }
  login() {
    
    this.af.auth.login()
    
  }
  logout() {
    this.af.database.object('/test').set({name:'logout'})
    this.af.auth.logout()
  }
  testAuth() {
    console.log(this.auth.getAuth())
  }
}
