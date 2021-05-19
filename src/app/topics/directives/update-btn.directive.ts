import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpdateBtn]'
})
export class UpdateBtnDirective {


  constructor() { }

  @HostBinding('class') className : string = 'btn-outline-primary';

  @HostListener('click', ['$event.target']) updateBtnStyle (el:Element) {
    this.className = 'btn-outline-secondary';
  }


}
