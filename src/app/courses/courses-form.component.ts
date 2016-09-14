import { Component, OnInit } from '@angular/core';
import { CourseService } from "../course.service"
import { LoginService } from "../login.service"
import { ActivatedRoute, Params } from '@angular/router'


const cloneObject = (obj) =>{
  var _obj = {};
  for(var key in obj)
    _obj[key] = obj[key]
  return _obj;
}

@Component({
  moduleId: module.id,
  selector: 'app-courses-form',
  templateUrl: 'courses-form.component.html',
  styleUrls: ['courses.component.css']
})
export class CoursesFormComponent implements OnInit {
  private course;
  private course_key;
  private isAddTeacher = false;
  private isNew = false;
  constructor(private courseService:CourseService, private lg:LoginService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.course = this.courseService.getBlankCourse();
    this.route.params.forEach((params:Params) => {
       if(params['key'] == 'new') {
         this.isNew = true;
         
       }else {
         
         this.courseService.getCourse(params['key']).subscribe(c =>{
           this.course_key = params['key']
           this.course = c;
         })
       }
        
    });
  }

  onUpdateGroup(group) {
    //update group?
    this.course.group = group
  }

  onUpdateDay(day_number){
    this.course.days = day_number
  }


  onAddTeacher(user) {
    console.log('gonna:' + user.$key)
    console.log(this.course)
    var tmp = cloneObject(this.course.teacher)
    tmp[user.$key] = true;
    //this.course.teacher[user.$key] = true
    this.course.teacher = tmp;
  }

  removeAllTeacher()
  {
    this.course.teacher = {}
    
  }

  save()
  {
    //!save without validate
    if(!this.isNew)
    {
      
      this.courseService.setCourse(this.course.$key ,this.course)
    }else
    {
      console.log('key:' + (this.course.code + (new Date().getTime())))
      this.courseService.setCourse(this.course.code + (new Date().getTime()), this.course)
    }
      
  }

}
