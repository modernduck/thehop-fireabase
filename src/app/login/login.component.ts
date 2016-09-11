import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
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
  constructor(private af:AngularFire, private auth:FirebaseAuth,  private router: Router) {
    this.loginService = new LoginService(af, auth);
     
   }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if(user)
      {
        this.router.navigate(["/profile"])
      }
    })
  }

  logout(){
    this.loginService.logout()
  }

  

  login(){
    this.loginService.login()
  }

}
