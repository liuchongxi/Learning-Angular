import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayP: boolean = true;
  buttonClickedData: Array<number> = [];

  buttonClicked(){
    this.displayP = !this.displayP;
    this.buttonClickedData.push(new Date().getSeconds());
  }
}
