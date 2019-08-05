import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewChecked {

  favoriteColor = '';

  constructor() {
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked() {
    console.log(this.favoriteColor);
  }

}
