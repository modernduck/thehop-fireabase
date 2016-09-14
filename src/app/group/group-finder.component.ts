import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupService } from "../group.service"

@Component({
  moduleId: module.id,
  selector: 'group-finder',
  template: `
   group Finder
  `,
  styleUrls: ['group.component.css']
})
export class GroupFinderComponent implements OnInit{

    @Input()
    display

    @Output()
    onSelected   

    constructor(private groupService:GroupService){
        this.onSelected = new EventEmitter<any>();
    }

    ngOnInit()
    {

    }
}