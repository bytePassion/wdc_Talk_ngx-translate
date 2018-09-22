import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly translateService: TranslateService) {
    this.translateService.addLangs(['en', 'de', 'la']);
    this.translateService.setDefaultLang('la');
    this.translateService.use('en');
  }

}
