import { Component, OnInit } from '@angular/core';
import { NotificationsService } from "../notifications.service"

@Component({
  moduleId: module.id,
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  private isShow =false;
  private notifications = []
  private count=0;

  private loadData(){
    
   /* this.nf.getAll().then(notifications=>{
       this.notifications = notifications
       this.notifications.subscribe(data =>{
         this.count = 0;
         console.log('subcribed->')
         for(var key in data)
            if(key != "$key" && key != "$value")
              this.count++
            
          
       })
   })*/
   this.nf.subcribe( notifications =>{
     this.notifications = notifications.toArray()
     
   })

  }

  constructor(private nf:NotificationsService) { 
     this.loadData();

  }

  toggle(){
    this.isShow = !this.isShow;
  }

  ngOnInit() {
    //this.notifications = this.nf.getAll()
   
  }


  read(item){
    this.isShow = false;
    console.log(item)
    this.nf.read(item.$key)
    
    
    
  }

}
