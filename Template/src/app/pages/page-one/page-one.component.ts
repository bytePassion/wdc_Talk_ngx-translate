import { Component, OnInit } from '@angular/core';
import {PageOneService} from './page-one.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {


  constructor(private pageOneService: PageOneService) { }

  ngOnInit() {

  }

  onClick() {
    this.pageOneService.getMyData()
      .pipe(
        take(1)
      ).subscribe((result) => alert(result));
  }

}
