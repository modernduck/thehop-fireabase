import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'main-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
  private isShowMenu=false;
  constructor() { }

  ngOnInit() {
  }

}
