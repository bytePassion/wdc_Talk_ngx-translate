import { Component, OnInit, TemplateRef } from '@angular/core';
import {PageOneService} from './page-one.service';
import {take} from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  mydata = '';
  modalRef: BsModalRef;

  constructor(private pageOneService: PageOneService, private modalService: BsModalService) { }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.pageOneService.getMyData()
      .pipe(
        take(1)
      ).subscribe((result) => {
        this.mydata = result;
        this.modalRef = this.modalService.show(template);
      });

  }

}
