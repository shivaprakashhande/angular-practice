import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-dashboard',
  templateUrl: './directives-dashboard.component.html',
  styleUrls: ['./directives-dashboard.component.css']
})
export class DirectivesDashboardComponent implements OnInit {

  topics : string[] = ['CustomDirective'];
  constructor() { }

  ngOnInit(): void {
  }

}
