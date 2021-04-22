import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  value = '';
  anotherValue = '';
  pass = false;
  constructor() { }

  ngOnInit(): void {
  }

}
