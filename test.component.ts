import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>
      Welcome {{name }}
      </h2>
      <h2 [style.color]="'orange'">Style Binding</h2>
      <h2 [style.color] ="hasError ? 'red' : 'green'">Style Binding Conditions</h2>
      <h2 [style.color]="highlightColor">Style Binding TWO </h2>
      <h2 [ngStyle]="titleStyles">Style Binding DEMO</h2>
      <button (click) ="onClick($event)">Greet</button>
      <button (click)="greeting ='Welcome Narendra'">Greet</button>
      {{greeting}}
      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)">Log</button>
      <input #myInput type="text">
      <button (click)="logMessage(myInput)">Log</button>
      <input [(ngModel)] ="name"  type = "text">
      {{name}}



  `,
  styles: [`
    .text-success {
      color: green ;
    }
    .text-danger {
      color: red ;
     }
     .text-special {
       font-style: italic;
     }
  `]
})
export class TestComponent implements OnInit {
  public name="";
  //public name = "Narendra Reddy";
  public successClass ="text-success";
  public hasError  = false;
  public isSpecial = true;
  public highlightColor = "yellow";
  public greeting ="";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public messageClasses = {
    "text-success" : !this.hasError,
     "text-danger" : this.hasError,
     "text-special" : this.isSpecial
  }
  
  constructor() { }

  onClick(event) {
    console.log("Welcome Narendra to Angular Development")
    console.log(event);
    //this.greeting ="Angular Projects" ;
    this.greeting= event.type;
    
  }

  ngOnInit() {
  }
  userGreetings(){
    return "Learning Angular" +this.name;
  }
  logMessage(value){
    console.log(value);
  }

}
