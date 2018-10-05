import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly translateService: TranslateService,
              @Inject('windowObject') private readonly window: Window) {

    this.translateService.addLangs(['en', 'de', 'la']);
    this.translateService.setDefaultLang('la');
    // this.translateService.use('en');

    const language = this.window.navigator.language;
    const languageCode = language.split('-')[0];
    this.translateService.use(languageCode);
  }

}
