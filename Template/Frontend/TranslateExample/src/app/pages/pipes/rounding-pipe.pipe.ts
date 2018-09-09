import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundingPipe'
})
export class RoundingPipePipe implements PipeTransform {

  transform(value: number): string {

    var rounded = value.toFixed(2);
    return rounded.toString() + "€";
  }

}
