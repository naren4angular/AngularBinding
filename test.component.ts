import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>
      Welcome {{name }}
      </h2>
      <h2 class="text-sucess">AngularLearnings</h2> 
      <h2 [class]="successClass">WelcomeNarendra</h2>
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
  public name = "Narendra Reddy";
  public successClass ="text-success";
  
  constructor() { }

  ngOnInit() {
  }
  userGreetings(){
    return "Learning Angular" +this.name;
  }

}
