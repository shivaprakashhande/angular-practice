import { Component, OnInit } from '@angular/core';
import { ServiceAService } from 'src/app/services/service-a.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  topics = ['LifeCycle', 'Interaction'];
  constructor() { }

  ngOnInit(): void {
    console.log('in dashboard');
    var sa = new ServiceAService();
    var sa1 = new ServiceAService();
  }

}
