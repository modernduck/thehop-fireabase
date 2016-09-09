import { Injectable,Component } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseAuth} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test:FirebaseObjectObservable<any>
  af:AngularFire
  constructor(af: AngularFire,public auth: FirebaseAuth) {
    this.af = af;
    this.test = af.database.object('/test')
    
    console.log(this.af)
  }
  getObject() {
    //this.test  = {name:'kuy'}
    this.af.database.object('/test').set({name:'yox'})
    //
    this.test = this.af.database.object('/test')
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
