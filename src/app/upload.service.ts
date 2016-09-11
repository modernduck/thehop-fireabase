import { Injectable, NgZone } from '@angular/core';

const uploadHtmlUrl = "upload.html"
const ON_START_UPLOAD =1, UPLOAD_DONE=2 
@Injectable()
export class UploadService {
  private uploadEvent;
  
  constructor(private _ngZone: NgZone) {
    
    

   }



  _listenEvent(doneCallback:(data) => void){
    this.uploadEvent = window.addEventListener('storage', function(e) {
       
          if(localStorage['_image_upload_status'] == "complete")
          {
             var data = JSON.parse(localStorage['_image_upload_data'])
              doneCallback(data);
              window.removeEventListener('storage', this.uploadEvent)
          }
      });
  }

  upload(url, callback){
    localStorage['_image_upload_status'] = "waiting"
        
     this._ngZone.runOutsideAngular(() => {
       this._listenEvent((data)=>{
          callback(data)
       })
    });
  /*  this.renderer.listenGlobal("document","storage",e => {
        if(localStorage['_image_upload_status'] == "complete")
        {
          var data = JSON.parse(localStorage['_image_upload_data'])
            console.log('yoooo')
            callback(data)
        }
    })*/

   

   /* this.uploadEvent = window.addEventListener('storage', function(e) {
       
        if(localStorage['_image_upload_status'] == "complete")
        {
            
            //callbackComplete(data)
            this.eventEmit.emit(UPLOAD_DONE)
            window.removeEventListener('storage', this.uploadEvent)
        }
    });*/
    window.open(uploadHtmlUrl + "?url=" +  url + "/", "Upload Stuff",'height=200,width=250');
  }

}
