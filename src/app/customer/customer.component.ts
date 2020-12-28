import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  tasks:string[] = ["Go to work","make a breakfast","send a report","take a course"]
  constructor() { }

  ngOnInit() {
  }

}
