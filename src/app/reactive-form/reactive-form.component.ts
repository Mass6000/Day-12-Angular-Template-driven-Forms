import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, AfterViewChecked {

  formControl = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    console.log(this.formControl);
  }

}
