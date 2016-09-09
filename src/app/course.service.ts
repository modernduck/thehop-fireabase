import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class CourseService {

  constructor(private af:AngularFire) {

   }

  getAllCourses(){
    return [1,2,3,4]
  }


}
