import { Injectable,Component } from '@angular/core';

import { LoginService } from './login.service'
import { LoginComponent } from "./login/login.component"


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  constructor() {
  }

}
