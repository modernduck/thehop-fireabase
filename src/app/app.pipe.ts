import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transform object to list of array
 * Usage:
 *   obj | object2Array:exponent
 * Example:
 *   {{ { "A":true, "B":true } |  exponentialStrength:10}}
 *   formats to: [ {"A":true}, {"B:true} ]
*/
@Pipe({name: 'object2Array'})
export class Object2ArrayPipe implements PipeTransform {
  transform(obj): any{
      //
      var result = [];
      for(var key in obj)
      {
          var tmp={}
          tmp[key] = obj[key]
          result.push(tmp)
      }
      return result;
    //return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

@Pipe({name: 'objectTrue2Array'})
export class ObjectTrue2ArrayPipe implements PipeTransform {
  transform(obj): any{
      //
      var result = [];
      for(var key in obj)
      {
          if(obj[key])
         {
            var tmp={}
            tmp[key] = obj[key]
            result.push(tmp)
         }
      }
      return result;
    //return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}