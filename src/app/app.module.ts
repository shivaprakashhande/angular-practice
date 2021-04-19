import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './topics/components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './topics/forms/forms.component';
import { ServicesComponent } from './topics/services/services.component';
import { PipesComponent } from './topics/pipes/pipes.component';
import { DirectivesComponent } from './topics/directives/directives.component';
import { LifeCycleComponent } from './topics/components/life-cycle/life-cycle.component';
import { DashBoardComponent } from './topics/components/dash-board/dash-board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    DashboardComponent,
    FormsComponent,
    ServicesComponent,
    PipesComponent,
    DirectivesComponent,
    LifeCycleComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
