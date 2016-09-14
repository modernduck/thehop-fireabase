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
            tmp["$key"] = key
            result.push(tmp)
         }
      }
      return result;
    //return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}


/*
 * Transform object to list of array
 * Usage:
 *   [{"nickname":"sompop"}, {"nickname":"sompap"}] | filterByAttribute:"nickname":"pop"
 * Example:
 *   [{"nickname":"sompop"}, {"nickname":"sompap"}] | filterByAttribute:"nickname":"pop"
 *   formats to: [{"nickname":"pop"}]
*/
@Pipe({name: 'filterByAttribute'})
export class FilterByAttributePipe implements PipeTransform {
  transform(input_array:Array<any>, attribute_name:string , attribute_value:string): any{
      
      if(input_array)
        return input_array.filter((value, index, arr) =>{
            if( value != null && value[attribute_name] && attribute_value)
            {
              
              return  value[attribute_name].toLowerCase().indexOf(attribute_value.toLowerCase()) >= 0
            }

          return true; 

        })
      else
        return input_array
    
  }
}

