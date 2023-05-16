import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'uppercaseFirstCaracter'
})
export class UppercaseFirstCaracter implements PipeTransform {
  handle(value: string) {
   return  value.substring(0,1).toUpperCase() + value.substring(1);
  }

  transform(value: string) { // "aaa bbb"
    const arrayValue = value.split(' '); //["aaa","bbb"]
    const result = arrayValue.map(ite => this.handle(ite)).join(" ");//["Aaa","Bbb"]
    return result;//"Aaa Bbb"
  }
}