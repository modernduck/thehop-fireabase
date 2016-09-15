import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from "angularfire2"
import { LoginService } from "./login.service"
import { Observable }     from 'rxjs/Observable'
import { PromiseUser } from "./model/promise-user"
import { Notification } from "./model/notification"

const ROOT_PATH ="notifications/"

interface NotificationCallBack {
    (notifications:Array<any>) : any      
}

@Injectable()
export class NotificationsService {

  //public notifcation_list:Promise<Array<any>>;
  private user_key;
  
  private notifications:FirebaseObjectObservable<any>
  
  constructor(private af:AngularFire, private lg:LoginService) { 
      this.notifications = new FirebaseObjectObservable<any>();
      this.lg.promiseUser.then(promise_user =>{
           this.notifications = promise_user.notifications;
           this.user_key = promise_user.key
       })

  }

  getAll() :Promise<FirebaseObjectObservable<any>> {
      //return this.notifications
      return new Promise<FirebaseObjectObservable<any>>((resolve, reject) => {
          this.lg.promiseUser.then(promise_user =>{
           resolve(promise_user.notifications);
           
       }).catch(reason=>{
           reject(reason)
       })
      })
  }

  
  subcribe(callback: (notificaitons:any ) => any) {
      this.lg.promiseUser.then( promise_user => {
          promise_user.notifications.subscribe(_notification=>{

              callback(new Notification(_notification) )
          })
      })
  }

  read(notification_key:string) {
      console.log('read:' + (ROOT_PATH + this.user_key + "/" +  notification_key))
      return this.af.database.object(ROOT_PATH + this.user_key + "/" +  notification_key).remove()
  }



}
