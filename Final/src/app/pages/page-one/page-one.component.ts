import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import { PageService } from '../service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(private readonly pageService: PageService,
              private readonly translateService: TranslateService) { }
  ngOnInit() { }

  onClick() {
    this.pageService.getPageOneData()
      .pipe(take(1))
      .subscribe((result) => alert(this.translateService.instant(result)));
  }

}
