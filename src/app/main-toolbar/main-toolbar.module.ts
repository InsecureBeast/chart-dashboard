import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainToolbarComponent } from './main-toolbar.component';
import { PeriodSelectorComponent } from '../period-selector/period-selector.component';

@NgModule({
  declarations: [
    MainToolbarComponent
  ],
  exports: [
    MainToolbarComponent
  ],
  imports: [
    MatToolbarModule,
    PeriodSelectorComponent
  ],
  providers: [],
})
export class MainToolbarModule { }
