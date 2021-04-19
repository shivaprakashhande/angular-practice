import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges() : void {
    console.log('ngOnChanges');
  }

  ngDoCheck() : void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() : void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() : void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() : void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() : void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() : void {
    console.log('ngOnDestroy');
  }

  clickMe () {
    console.log("I'm clicked");
  }


}
