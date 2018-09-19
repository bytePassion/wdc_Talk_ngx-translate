import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';
import { take } from 'rxjs/operators';
import { Numbers } from '../../models/numbers';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  constructor(private readonly pageService: PageService) { }

  value1: string;
  value2: string;

  ngOnInit() {
    this.value1 = '<<unknown>>';
    this.value2 = '<<unknown>>';
  }

  onClick(): void {
    this.pageService.getPageTwoData().subscribe((result: Numbers) => {
      this.value1 = result.first.toString();
      this.value2 = result.second.toString();
    });
  }

}
