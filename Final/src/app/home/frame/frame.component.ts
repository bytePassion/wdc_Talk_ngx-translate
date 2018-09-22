import { Component, OnInit } from '@angular/core';
import { LanguageDisplayModel } from '../../models/languaged-display-model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  availableLanguages: LanguageDisplayModel[];
  selectedLanguage: LanguageDisplayModel;

  selectedPage: string;

  constructor(private readonly router: Router,
              private readonly translateService: TranslateService) {
  }

  ngOnInit() {

    this.router.events.subscribe(_ => {
      const url = this.router.url;
      this.selectedPage = url.substr(url.length - 5, 5);
    });

    this.availableLanguages = [
      {
        displayName: 'demo.frame.languageSelector.german',
        languageCode: 'de',
      },
      {
        displayName: 'demo.frame.languageSelector.english',
        languageCode: 'en',
      },
      {
        displayName: 'demo.frame.languageSelector.labelLang',
        languageCode: 'la',
      }
    ];
    this.selectedLanguage = this.availableLanguages.find(lang => this.translateService.currentLang === lang.languageCode);
  }

  onItemClick(item: LanguageDisplayModel): void {
    this.selectedLanguage = item;
    this.translateService.use(item.languageCode);
  }

}


