import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() sendNumber = new EventEmitter<number>();
  gamIntervel: any;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    let  number = 0;
    this.gamIntervel = setInterval(() => {
      this.sendNumber.emit(number);
      number++;
    }, 1000);
  }

  onGameEnd(){
    clearInterval(this.gamIntervel);
  }
}
