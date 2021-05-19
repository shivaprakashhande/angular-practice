import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-patterns',
  template: '<router-outlet></router-outlet>'
})
export class DesignPatternsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.getSomething<string>(['3','4','5']);
  }

  getSomething <T> (arg : T[]): T {
    return arg[0];
  }

}
