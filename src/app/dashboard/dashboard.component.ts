import { Component } from '@angular/core';
import { ChartItem } from '../charts/chart-item/chart-item';
import { ChartType } from '../charts/chart-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public charts: ChartItem[];

  constructor() {
    this.charts = [
      new ChartItem(ChartType.Humidity),
      new ChartItem(ChartType.Light),
      new ChartItem(ChartType.Pressure),
    ]    
  }

  chartCreated($event: ChartType): void {
    this.charts.push(new ChartItem($event));
  }

  itemClose(item: ChartItem): void {
    const index = this.charts.indexOf(item);
    if (index !== -1) {
      this.charts.splice(index, 1);
    }
  }
    
}
