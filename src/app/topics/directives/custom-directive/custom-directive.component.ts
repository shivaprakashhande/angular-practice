import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  constructor() { }

  condition : boolean = true;

  defaultClassName = 'btn-outline-danger';

  ngOnInit(): void {
  }

}
