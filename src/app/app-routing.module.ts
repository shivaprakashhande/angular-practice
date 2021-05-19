import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ComponentsComponent } from './topics/components/components.component';
import { DashBoardComponent } from './topics/components/dash-board/dash-board.component';
import { InteractionComponent } from './topics/components/interaction/interaction.component';
import { LifeCycleComponent } from './topics/components/life-cycle/life-cycle.component';
import { DesignPatternsComponent } from './topics/design-patterns/design-patterns.component';
import { FactoryComponent } from './topics/design-patterns/factory/factory.component';
import { DirectivesComponent } from './topics/directives/directives.component';
import { FormsComponent } from './topics/forms/forms.component';
import { PipesComponent } from './topics/pipes/pipes.component';
import { ServicesComponent } from './topics/services/services.component';
import { DSDashboardComponent } from './topics/design-patterns/dashboard/dashboard.component';
import { DirectivesDashboardComponent } from './topics/directives/directives-dashboard/directives-dashboard.component';
import { CustomDirectiveComponent } from './topics/directives/custom-directive/custom-directive.component';

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
    path     : 'DesignPatterns',
    component: DesignPatternsComponent,
    children : [
      {path : '', component : DSDashboardComponent},
      {path : 'Factory', component : FactoryComponent},
    ]
  },
  {
    path     : 'Directives',
    component: DirectivesComponent,
    children : [
      {path : '', component : DirectivesDashboardComponent},
      {path : 'CustomDirective', component : CustomDirectiveComponent},]
  },
  {
    path: 'Forms',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
