import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  firstNumber: number = 0;
  secondNumber: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onClick(): void {
    this.httpClient.get("/api/numbers/fancy").subscribe((result: any) => {
      this.firstNumber = result.first;
      this.secondNumber = result.second;
    })
  }

}
