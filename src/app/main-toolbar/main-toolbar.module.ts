import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainToolbarComponent } from './main-toolbar.component';
import { PeriodSelectorModule } from '../period-selector/period-selector.module';

@NgModule({
  declarations: [
    MainToolbarComponent
  ],
  exports: [
    MainToolbarComponent
  ],
  imports: [
    MatToolbarModule,
    PeriodSelectorModule
  ],
  providers: [],
})
export class MainToolbarModule { }
