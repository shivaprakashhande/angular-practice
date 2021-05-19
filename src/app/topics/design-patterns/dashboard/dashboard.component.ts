import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DSDashboardComponent implements OnInit {
  topics = ['Factory'];

  constructor() { }

  ngOnInit(): void {
  }

}
