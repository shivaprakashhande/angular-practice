import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ComponentsComponent } from './topics/components/components.component';
import { DashBoardComponent } from './topics/components/dash-board/dash-board.component';
import { InteractionComponent } from './topics/components/interaction/interaction.component';
import { LifeCycleComponent } from './topics/components/life-cycle/life-cycle.component';
import { DirectivesComponent } from './topics/directives/directives.component';
import { FormsComponent } from './topics/forms/forms.component';
import { PipesComponent } from './topics/pipes/pipes.component';
import { ServicesComponent } from './topics/services/services.component';
const routes: Routes = [
  { path : '', component :DashboardComponent},
  {
    path     : 'Components',
    component: ComponentsComponent,
    children : [
      {path : '', component : DashBoardComponent},
      {path : 'LifeCycle', component : LifeCycleComponent},
      {path : 'Interaction', component : InteractionComponent}
    ]
  },
  {
    path     : 'Forms',
    component: FormsComponent,
    children : []
  },
  {
    path     : 'Services',
    component: ServicesComponent,
    children : []
  },
  {
    path     : 'Pipes',
    component: PipesComponent,
    children : []
  },
  {
    path     : 'Directives',
    component: DirectivesComponent,
    children : []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
