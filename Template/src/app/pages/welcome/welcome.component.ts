import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageService } from '../service/page.service';
import { Numbers } from '../../models/numbers';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  firstNumber = 0;
  secondNumber = 0;

  constructor(private readonly pageService: PageService) { }

  ngOnInit() {
  }

  onClick(): void {
    this.pageService.getWelcomePageData().subscribe((result: Numbers) => {
      this.firstNumber = result.first;
      this.secondNumber = result.second;
    });
  }

}
