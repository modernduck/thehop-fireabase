import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseAuth } from 'angularfire2';
import { LoginService } from '../login.service'

@Component({
  moduleId: module.id,
  selector: 'login-box',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  
  private loginService:LoginService;
  constructor(private af:AngularFire, private auth:FirebaseAuth) {
    this.loginService = new LoginService(af, auth);
    
   }

  ngOnInit() {

  }

  logout(){
    this.loginService.logout()
  }

  login(){
    this.loginService.login()
  }

}
