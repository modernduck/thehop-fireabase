import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service"


@Component({
  moduleId: module.id,
  selector: 'users-finder',
  templateUrl: 'users-finder.component.html',
  styleUrls: ['users.component.css']
})
export class UsersFinderComponent implements OnInit {
  private users;
  constructor(private userService:UserService) { 
      
  }

  ngOnInit() {
     this.users = this.userService.getAllUser()
  }

}
