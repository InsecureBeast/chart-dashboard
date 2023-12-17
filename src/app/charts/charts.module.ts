import { NgModule } from '@angular/core';
import { ChartItemComponent } from './chart-item/chart-item.component';
import { NewChartItemComponent as NewChartItemComponent } from './chart-new/chart-new.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ChartItemComponent,
    NewChartItemComponent,
    ChartComponent
  ],
  exports: [
    NewChartItemComponent,
    ChartItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    HighchartsChartModule
  ],
  providers: [
  ],
})
export class ChartsModule { }
