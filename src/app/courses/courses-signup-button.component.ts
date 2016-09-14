import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from "../course.service"
const NOTIFY_LIMIT = 5

@Component({
  moduleId: module.id,
  selector: 'courses-signup',
  template: `

    <a class="btn {{buttonClass}}" routerLink="{{course.$key}}">{{displayButton}}</a>
    <div>
        <span *ngFor="let item of full_group">({{item}} Full)</span>
    </div>
  `,
  styleUrls: ['courses.component.css']
})
export class CoursesSignupButtonComponent implements OnInit {
  
  @Input()
  course

  
   
  constructor(private courseService:CourseService) { }

  private displayButton = "SIGN UP";
  private buttonClass = "btn-success"
  private seat_left=0;
  private full_group=[]
  private group
  ngOnInit(){
    this.group = this.course.group
    for(var g in this.group){
        if(this.group[g].public) {
            this.seat_left+= this.group[g].limit;
            if(this.group[g].limit == 0) {
                this.full_group.push(this.group[g].name)
            }
        }
        
    }
    if(this.seat_left <= NOTIFY_LIMIT && this.seat_left > 0)
    {
        this.displayButton = this.seat_left + " Left. Signup!"
        this.buttonClass = "btn-danger"
    }else if(this.seat_left <= 0)
    {
        this.displayButton = "SOLD OUT"
        this.buttonClass = "btn-default"
    }
    

  }

}
