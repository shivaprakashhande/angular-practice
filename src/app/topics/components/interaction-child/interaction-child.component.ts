import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit {
  @Input() childData:any;
  @Input() anotherChildData:any;
  constructor() { }

  ngOnInit(): void {
    console.log('on init');

  }

  ngOnChanges(ch : SimpleChange) {
    console.log('on changes', ch);
  }

}
