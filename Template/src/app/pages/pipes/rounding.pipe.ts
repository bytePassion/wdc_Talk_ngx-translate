import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundingPipe'
})
export class RoundingPipe implements PipeTransform {

  transform(value: number): string {

    const rounded = value.toFixed(2);
    return rounded.toString() + '€';
  }

}
