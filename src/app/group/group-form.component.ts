import { Component, OnInit } from '@angular/core';
import { GroupService } from "../group.service"
import { UserService } from "../user.service"

@Component({
  moduleId: module.id,
  selector: 'app-group-form',
  templateUrl: 'group-form.component.html',
  styleUrls: ['group.component.css']
})
export class GroupFormComponent implements OnInit {
  private members
  constructor(private groupService:GroupService, private userService:UserService) {
      
   }

  ngOnInit() {
    
  }

}
