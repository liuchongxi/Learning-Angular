import { Component, OnInit, DoCheck } from '@angular/core';
import { counterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  activeCount: number;
  inactiveCount: number;

  constructor(private counterService: counterService){}

  ngOnInit(){
    this.activeCount = this.counterService.activeCount;
    this.inactiveCount = this.counterService.inactiveCount;
  }

  ngDoCheck(){
    this.activeCount = this.counterService.getactiveCount();
    this.inactiveCount = this.counterService.getInactiveCount();
  }
}
