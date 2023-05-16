import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'monUpperCase'
})
export class MMonUpperCase implements PipeTransform {
  transform(value: string, param1: string, param2: string) {
    console.log(value);
    console.log('param1 = ', param1);
    return value.replaceAll(param1,param2);
  }
}