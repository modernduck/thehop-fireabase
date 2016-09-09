import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFire, FirebaseObjectObservable, FirebaseAuth } from 'angularfire2';
import { LoginService } from '../login.service'

@Component({
  moduleId: module.id,
  selector:"logout-box",
  template:'nope'
  
})
export class LogoutComponent implements OnInit {
  
  private loginService:LoginService;
  constructor(private af:AngularFire, private auth:FirebaseAuth,  private router: Router) {
    this.loginService = new LoginService(af, auth);
     
   }

  ngOnInit() {
    this.loginService.logout()
    this.af.auth.subscribe(user => {
      if(!user)
      {
        this.router.navigate([""])
      }
    })
  }


}
