import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeElUsingElementRef]'
})
export class ChangeBackgroundDirective implements OnInit {

  constructor(private el : ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.classList.add('bg-dark', 'text-light', 'my-3');
  }

}
