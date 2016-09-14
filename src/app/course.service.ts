import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';


const DAY_OBJECT = {"mon":2, "tue":3, "wed":5, "thu":7, "fri":11, "sat":13, "sun":17}
const TYPE_PATH = "courses_type/"
const ROOT_PATH = "courses"


@Injectable()
export class CourseService {

  public static slugify(text)
  {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  constructor(private af:AngularFire) {

   }

  getAllCourses(){
    
    return this.af.database.list(ROOT_PATH)
  }

  getAllType()
  {
    return this.af.database.list(TYPE_PATH)
  }

  getCourse(key)
  {
    
    return this.af.database.object(ROOT_PATH + "/" + key)
  }

  setCourse(key, course) {
    console.log('path: ' +  (ROOT_PATH + "/" + key))
    console.log(course)
    if(course.$key)
      delete course.$key
    var promise = this.af.database.object((ROOT_PATH + "/" + key)).set(course)
    promise.then(_ => console.log('success'))
  .catch(err => console.log(err, 'You dont have access!')); 
  }

  getBlankCourse()
  {
    return {
      name:"",
      code:"",
      description:"",
      start_date:"",
      end_date:"",
      days:1,
      teacher:{}

    }
  }

  public static daysToObject(days_number) {
    var days = {
      mon:false, 
      tue:false,
      wed:false,
      thu:false,
      fri:false,
      sat:false,
      sun:false
  } 
    for(var key in DAY_OBJECT)
    {
      if(days_number % DAY_OBJECT[key] == 0)
        days[key] = true;
    }
    return days;
  }

  public static daysToNumber(days_object)
  {
    var start_number = 1;
    for(var key in days_object)
      if(days_object[key] === true)
        start_number *= DAY_OBJECT[key]

    return start_number
  }




}
