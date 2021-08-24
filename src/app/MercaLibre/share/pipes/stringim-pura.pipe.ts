import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringimPura',
  pure:false
})
export class StringimPuraPipe implements PipeTransform {

  transform(value: string):string {
    console.log('se ejecuto una pipe impura') ;
    return value.toUpperCase();
  }

}
