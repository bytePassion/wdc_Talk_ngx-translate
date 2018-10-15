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
    const translated = value.toLocaleString(this.translateService.currentLang,
        { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return translated + '€';
  }
}
