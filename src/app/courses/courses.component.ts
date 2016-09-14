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
  private courses;
  private currentGroup;
  private ckeditorContent;
  constructor(private courseService:CourseService, private lg:LoginService) { }

  ngOnInit() {
    this.courses = this.courseService.getAllCourses()
    this.lg.getCurrentUser(user=>{
      this.currentGroup = user.group
    })
  }

}
