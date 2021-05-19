import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InteractionChildComponent } from '../interaction-child/interaction-child.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  value        = '';
  anotherValue = '';
  pass         = false;
  localVar     = '';
  dataFromChild= '';
  isFirstChildDisplay : boolean = true;
  isSecondChildDisplay : boolean = false;

  @ViewChild(InteractionChildComponent) childComponent :any;
  constructor() { }

  ngOnInit(): void {
  }

  updateLocalVar (val : string) {
    this.localVar = val;
  }

  showChild (comp : string) {
    if (comp == 'first') {
      this.isFirstChildDisplay = true;
      this.isSecondChildDisplay = false;
    } else {
      this.isFirstChildDisplay = false;
      this.isSecondChildDisplay = true;
    }
  }

  reset() {
    this.value = '';
    this.anotherValue = '';
    this.localVar = '';
    this.dataFromChild = '';
    this.childComponent.childInput = '';
    this.childComponent.toBeSentToParent = '';
  }

}
