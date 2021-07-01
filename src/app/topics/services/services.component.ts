import { Component, OnInit } from '@angular/core';
// import { ServiceAService } from 'src/app/services/service-a.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers : [ServiceAService]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.sA.logger('logging something');
  }

}
