import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // @Input()
  // count = 0;

  // increment() {
  //   this.count = this.count++;

  // }

  // decrement () {
  //   this.count = this.count--;
  //   console.log(this.count);
  // }

  // addCounter() {

  //   this.count = this.count + 1;
  //   console.log('Im in the child component' );
  //   console.log(this.count);
  // }

  constructor() { }

  ngOnInit() {
  }

}
