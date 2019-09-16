import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Databinding-Exercise';
  username: string = "";

  emptyUserName(){
    if(this.username === ""){
      return true;
    }else{
      return false;
    }
  }

  resetUserName(){
    this.username = "";
  }
}
