import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class AppUnlessDirective {

  @Input('appUnless') set unless(condition:boolean) {
    !condition ? this.vcRef.createEmbeddedView(this.tRef) : this.vcRef.clear();
  }

  constructor(private tRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }

}
