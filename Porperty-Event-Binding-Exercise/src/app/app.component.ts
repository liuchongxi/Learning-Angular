import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Porperty-Event-Binding-Exercise';
  numbers: Array<number> = [];

  receiveNumber(number: number) {
    this.numbers.push(number);
  }
}
