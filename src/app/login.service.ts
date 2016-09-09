import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseAuth, FirebaseAuthState} from 'angularfire2';

@Injectable()
export class LoginService {

  
  _isLogin = false;
  _callbackSuccess:any;

  public test = "yo"
  public info:FirebaseObjectObservable<any> = null;
  private user:FirebaseAuthState;

  private getDefaultGroup()
  {
    return {
      admin:false,
      banking:false,
      newbie:true,
      teacher:false
    }
  }

  private getGoogleInfo (userAuth)
  {
    console.log('gonna get info')
    



    return {
      "email": userAuth.email,
      "nickname":userAuth.displayName?userAuth.displayName:userAuth.email,
      "fullname":userAuth.displayName?userAuth.displayName:userAuth.email,
      "picture":userAuth.photoURL,
      "group":this.getDefaultGroup()

    }
  }

  private fetchInfo ( uid )
  {
    console.log('fetch:' + ('users/' + uid) )
    this.info = this.af.database.object('users/' + uid)
    this.info.subscribe(data=>{
      console.log('done load info')
      console.log(data) 
      if(typeof data.email == "undefined")
      {
        console.log('create stuff')
        console.log(this.getGoogleInfo(this.user.auth))
        this.af.database.object('users/' + uid).set(this.getGoogleInfo(this.user.auth))
        
      }
      
      
    })
  }

  constructor(private af: AngularFire,public auth: FirebaseAuth) {
    //this.info = this.af.database.object('users/hlCJ4pmv09f5aoHk73X08cWaxcn2')
    this.af.auth.subscribe(user=>{
      
      if(user)
      {
        this.user = user;
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
