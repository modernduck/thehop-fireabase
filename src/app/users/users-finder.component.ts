import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from "../user.service"


@Component({
  moduleId: module.id,
  selector: 'users-finder',
  templateUrl: 'users-finder.component.html',
  styleUrls: ['users.component.css']
})
export class UsersFinderComponent implements OnInit {
  private users;
  private q;
  private last_filter;
  public selectedUser;

  @Input()
  display

  @Output()
  onSelected = new EventEmitter<any>();

  constructor(private userService:UserService) { 
      
  }

  ngOnInit() {
     this.users = this.userService.getAllUser()
     if(typeof this.display == "undefined")
        this.display = true;
      console.log(this.display)
  }

  select(user)
  {
    
    this.selectedUser = user;
    this.onSelected.emit(user)
  }

  onKeyPress(e)
  {
    

  }

  
}
