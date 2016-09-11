import { Component, OnInit } from '@angular/core';
import { GroupService } from "../group.service"

@Component({
  moduleId: module.id,
  selector: 'app-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.css']
})
export class GroupComponent implements OnInit {
  private groups
  constructor(private groupService:GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getAllGroup();
  }

}
