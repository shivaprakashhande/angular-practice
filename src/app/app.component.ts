import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-card>
    <button mat-button color="secondary">
      <mat-icon aria-hidden="false" aria-label="Example home icon" routerLink ="/">
        home
      </mat-icon>
    </button>
  </mat-card>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
