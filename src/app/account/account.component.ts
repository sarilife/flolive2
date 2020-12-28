import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Transaction {
  currency:string,
  amount:number,
  date:string
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  supportForm = new FormGroup({
    email: new FormControl(''),
    message: new FormControl(''),
  });

  
  transactions:Transaction[] = [];

  constructor() {
    
    for(let i =1;i<=10;i++){
      this.transactions.push({
        currency:"currency"+i,amount:i*1000,date:(new Date().toDateString())
      })
    }

    this.transactions
   }

  ngOnInit() {
  }

  about(){
    alert("about button");
  }

  settings(){
    alert("settings button");
  }

  notifications(){
    alert("notifications button");
  }


  onSubmit() {
    console.log(this.supportForm.value);
  }


}
