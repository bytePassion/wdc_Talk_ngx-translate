import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'roundingPipe',
  pure: false
})
export class RoundingToCurrencyPipe implements PipeTransform {

  constructor(private readonly translateService: TranslateService) {
  }

  transform(value: number): string {
    const rounded = value.toFixed(2);
    const parts = rounded.split('.');

    switch (this.translateService.currentLang) {
      case 'de': return `${parts[0]},${parts[1]}€`;
      case 'en': return `${parts[0]}.${parts[1]}€`;
    }
    return rounded + '€';
  }
}
