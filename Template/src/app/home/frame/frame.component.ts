import { Component, OnInit } from '@angular/core';
import { LanguageDisplayObject } from './LanguageDisplayObject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  availableLanguages: LanguageDisplayObject[];
  selectedLanguage: LanguageDisplayObject;

  selectedPage: string;

  constructor(private readonly router: Router) { }

  ngOnInit() {

    this.router.events.subscribe(_ => {
      const url = this.router.url;
      this.selectedPage = url.substr(url.length - 5, 5);
    });

    this.availableLanguages = [
      {
        displayName: 'Deutsch',
        languageCode: 'DE',
      },
      {
        displayName: 'Englisch',
        languageCode: 'EN',
      }
    ];
    this.selectedLanguage = this.availableLanguages[0];
  }

  onItemClick(item: LanguageDisplayObject): void {
    this.selectedLanguage = item;
  }

}


