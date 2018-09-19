import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';
import { Numbers } from '../../models/numbers';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  firstNumber = 0;
  secondNumber = 0;

  constructor(private readonly pageService: PageService) { }

  ngOnInit() {
  }

  onClick(): void {
    this.pageService.getPageThreeData().subscribe((result: Numbers) => {
      this.firstNumber = result.first;
      this.secondNumber = result.second;
    });
  }

}
