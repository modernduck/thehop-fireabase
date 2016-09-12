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
  
  
  constructor(private af:AngularFire, private auth:FirebaseAuth,  private router: Router,private loginService:LoginService) {
  
     
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
