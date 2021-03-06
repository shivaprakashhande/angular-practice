import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
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
import { InteractionComponent } from './topics/components/interaction/interaction.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InteractionChildComponent } from './topics/components/interaction-child/interaction-child.component';
import { InteractionChildSecondComponent } from './topics/components/interaction-child-second/interaction-child-second.component';
import { FactoryComponent } from './topics/design-patterns/factory/factory.component';
import { DSDashboardComponent } from './topics/design-patterns/dashboard/dashboard.component';
import { DesignPatternsComponent } from './topics/design-patterns/design-patterns.component';
import { DirectivesDashboardComponent } from './topics/directives/directives-dashboard/directives-dashboard.component';
import { CustomDirectiveComponent } from './topics/directives/custom-directive/custom-directive.component';
import { ChangeBackgroundDirective } from './topics/directives/change-background.directive';
import { ChangeElUsingRendererDirective } from './topics/directives/change-el-using-renderer.directive';
import { UpdateBtnDirective } from './topics/directives/update-btn.directive';
import { AppUnlessDirective } from './topics/directives/app-unless.directive';
import { TestingComponent } from './topics/testing/testing.component';


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
    DashBoardComponent,
    InteractionComponent,
    InteractionChildComponent,
    InteractionChildSecondComponent,
    DesignPatternsComponent,
    DSDashboardComponent,
    FactoryComponent,
    ChangeBackgroundDirective,
    DirectivesComponent,
    DirectivesDashboardComponent,
    CustomDirectiveComponent,
    ChangeElUsingRendererDirective,
    UpdateBtnDirective,
    AppUnlessDirective,
    TestingComponent
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
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
