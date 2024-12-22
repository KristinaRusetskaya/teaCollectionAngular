import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitDescription'
})
export class SplitDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    let result: string = '';
    if (value.length > 95) {
      result = value.slice(0, 200);
    }
    return result + '...'
  }

}
