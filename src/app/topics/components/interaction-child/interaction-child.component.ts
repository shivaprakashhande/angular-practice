import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit {
  @Input() childData:any;
  @Input('anotherChildData') myName:any;
  @Output('toParent') passToParent = new EventEmitter();
  @ViewChild('viewChildRef') inputRef : any;
  someVar : string = 'hello!';
  toBeSentToParent = '';
  childInput : any;
  constructor() {
    console.log('in constructor')
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnChanges(ch : SimpleChange) {
    console.log('on changes', ch);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  someMethod () {
    alert('This is a child method!');
  }

  anotherMethod () {
    alert('This is another child method!');
  }

  showElementVal () {
    alert(this.inputRef.nativeElement.value);
  }

}
