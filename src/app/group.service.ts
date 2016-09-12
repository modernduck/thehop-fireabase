import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseAuth, FirebaseAuthState} from 'angularfire2';

const FIX_GROUP_NAME =["admin", "banking", "teacher", "newbie","new" ]
@Injectable()
export class GroupService {

  

  constructor(private af:AngularFire) { }

  private canSetGroup(name)
  {
    var can_set = true
    //check from fix_group
    FIX_GROUP_NAME.forEach(item => {
      if(item==name)
        can_set = false
    })


    return can_set
  }

  

 private slugify(text)
  {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  getBlankGroup()
  {
    return {
      "member_names":[],
      "members":[],
      "name":"New Group Name"
    }
  }

  getAllGroup()
  {
    return this.af.database.list("groups")
  }

  getGroup(slug)
  {
    return this.af.database.object("groups/" + slug)
  }

  renameGroup(slug, name)
  {
    this.af.database.object("groups/" + slug + "/name").set(name)
  }
  //[!stupid] this wont check if user craete the gorup alreay or not
  createGroup(name)
  {
    var key_name =  this.slugify(name);
    var saveObject = {
      "name":name,
      "members":{}
    }
    this.af.database.object("groups/" + key_name).set(saveObject);
  }

  deleteGroup(slug)
  {
    if(this.canSetGroup(slug))
      this.af.database.object("groups/" + slug).remove();
  }

  addMemberGroup(slug, user_key){
    this.af.database.object("groups/" + slug + "/members/" + user_key).set(true)
  }

  removeMemberGroup(slug, user_key)
  {
    this.af.database.object("groups/" + slug + "/members/" + user_key).remove();
  }

  addMember(slug:string, user)
  {
    //user.$key = usekey
    this.af.database.object("groups/" + slug + "/members/" + user.$key).set(true)
    this.af.database.object("groups/" + slug + "/member_names/" + user.$key).set(user.nickname)
    //add group in that user too
    this.af.database.object("users/" + user.$key + "/group/" + slug).set(true);
  }

  removeMember(slug:string, user_key:string)
  {
      this.af.database.object("groups/" + slug + "/members/" + user_key).remove()
    this.af.database.object("groups/" + slug + "/member_names/" + user_key).remove()
    //add group in that user too
    this.af.database.object("users/" + user_key + "/group/" + slug).remove()
  }



}
