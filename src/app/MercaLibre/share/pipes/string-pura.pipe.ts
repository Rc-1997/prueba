import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPura',
  pure:true
})
export class StringPuraPipe implements PipeTransform {

  transform(value: string):string {
    console.log('se ejecuto una pipe pura');
    return value.toUpperCase();
  }

}
