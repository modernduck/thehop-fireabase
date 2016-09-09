import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { Router } from '@angular/router'
import { AngularFire, FirebaseObjectObservable, FirebaseAuth } from 'angularfire2';

@Component({
  
  selector: '[login-menu]',
  template: '<a routerLink="logout" *ngIf="loginService.isLogin()">Log Out</a>',
  
})
export class MenuLoginComponent implements OnInit {
  
  private loginService:LoginService;
  
  constructor(private af:AngularFire, private auth:FirebaseAuth){

    this.loginService= new LoginService(af, auth)
  }


  

  ngOnInit() {
    
  }
  
}
