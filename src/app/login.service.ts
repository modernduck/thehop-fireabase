import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseAuth} from 'angularfire2';

@Injectable()
export class LoginService {

  
  _isLogin = false;
  public test = "yo"
  public info = null;
  private fetchInfo ( uid )
  {
    console.log('fetch:' + ('users/' + uid) )
    this.info = this.af.database.object('users/' + uid)
    
  }

  constructor(private af: AngularFire,public auth: FirebaseAuth) {
    //this.info = this.af.database.object('users/hlCJ4pmv09f5aoHk73X08cWaxcn2')
    this.af.auth.subscribe(user=>{
      if(user)
      {
        this._isLogin = true;
        this.fetchInfo(user.uid)
      }else
      {
        this._isLogin = false;
      }
    })
   }
  login(){
     this.auth.login();
   }
  isLogin(){
    return this._isLogin;
  }
  logout(){
    this.auth.logout();
  }

}
