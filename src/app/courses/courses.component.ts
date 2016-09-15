import { Component, OnInit } from '@angular/core';
import { CourseService } from "../course.service"
import { LoginService } from "../login.service"

@Component({
  moduleId: module.id,
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css']
})
export class CoursesComponent implements OnInit {
  private courses = [];
  private currentGroup;
  private user;
  private ckeditorContent;
  constructor(private courseService:CourseService, private lg:LoginService) { }

  ngOnInit() {
     this.courseService.getAllCourses().subscribe(data => {
       this.courses = data
     })
    this.lg.getCurrentUser(user=>{
      this.user = user;
      this.currentGroup = user.group
    })
  }

}
