import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})


export class EmployeeFormComponent implements OnInit {

  model = new Employee(
    'John',
    'Doe',
    true,
    'W2'
  );


  constructor() {
  }

  ngOnInit() {
  }

  submitForm() {
    console.log('Form Submitted!');
  }
}
