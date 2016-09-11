import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseAuth, FirebaseAuthState} from 'angularfire2';


@Injectable()
export class UserService {

  constructor(private af:AngularFire, private auth:FirebaseAuth) { }

  private getDefaultGroup()
  {
    return {
      admin:false,
      banking:false,
      newbie:true,
      teacher:false
    }
  }

  public getNewGoogleUser(userAuth)
  {
    return {
      "email": userAuth.email,
      "nickname":userAuth.displayName?userAuth.displayName:userAuth.email,
      "fullname":userAuth.displayName?userAuth.displayName:userAuth.email,
      "picture":userAuth.photoURL,
      "group":this.getDefaultGroup()

    }
  }

  public setUser(user_key, user){
    this.af.database.object('users/' + user_key).set(user)
    //update user group
    //[!stupid]now this is really stupid cause it update everytime user set 
    for(var group_name in user.group)
    {
      if( user.group[group_name] === true)
      {
        this.af.database.object('groups/' + group_name + '/members/' + user_key).set(true)
      }else
      {
        this.af.database.object('groups/' + group_name + '/members/' + user_key).set(false)
      }
    }


  }

  

  public updatePicture(user_key, pictureUrl)
  {
    this.af.database.object('users/' + user_key + '/picture').set(pictureUrl);
  }

  public getUser(user_key)
  {
    return this.af.database.object('users/' + user_key)
  }

  public getUserNickname(user_key)
  {
    return this.af.database.object('users/' + user_key + '/nickname')
  }

  public deleteUser(user_key)
  {

  }



}
