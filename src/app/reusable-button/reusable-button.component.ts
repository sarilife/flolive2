import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.scss']
})
export class ReusableButtonComponent implements OnInit {


  @Input() buttonType:string;
  @Input() disabled?:boolean;
  @Input() primaryColor?:string = 'green'
  @Output() clickButton:any = new EventEmitter();

  constructor() { 
    // console.log(this.buttonType);
  }

  ngOnInit() {
  }

  click(){
    this.clickButton.emit();
    console.log( this.disabled)
  }

}
