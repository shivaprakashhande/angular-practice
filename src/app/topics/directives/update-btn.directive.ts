import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUpdateBtn]'
})
export class UpdateBtnDirective implements OnInit{


  constructor() { }

  @Input('appUpdateBtn') defaultClass : string = '';

  @HostBinding('class') className : string = '';


  ngOnInit() {
    this.className = this.defaultClass;
  }

  @HostListener('click', ['$event.target']) updateBtnStyle (el:Element) {
    this.className = 'btn-outline-success';
  }


}
