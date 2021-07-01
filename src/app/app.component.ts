import { Component, OnInit } from '@angular/core';
import { ServiceC } from './services/service-c.service';
// import { ServiceAService } from './services/service-a.service';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" routerLink ="/">Angular</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#" routerLink ="/">Home <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
  // providers : [ServiceAService]

})
export class AppComponent implements OnInit {

  constructor () {}
  ngOnInit () {
    // this.sA.logger('in app component');
    var sC = new ServiceC();
    var sC1 = new ServiceC();

    console.log(sC,sC1,sC == sC1);
  }
}
