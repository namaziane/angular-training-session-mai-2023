import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'formFilter'
})
export class FormFilter implements PipeTransform {

  transform(liste:any, searchTerm:any, field:any) { // "aaa bbb"
    return  liste.filter((f :any)=> f[field] == searchTerm); //une nouvelle liste 
;
    //return  liste.sort((f:any) => f[field] == searchTerm);
  }
}