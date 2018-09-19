import { Component, OnInit } from '@angular/core';
import { LanguageDisplayObject } from './LanguageDisplayObject';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  availableLanguages: LanguageDisplayObject[];
  selectedLanguage: LanguageDisplayObject;

  selectedPage: string = 'page1';

  constructor() { }

  ngOnInit() {
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

  onPageClick(page: string): void {
    this.selectedPage = page;
  }

  onItemClick(item: LanguageDisplayObject): void {
    this.selectedLanguage = item;
  }

}


