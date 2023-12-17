import { Component } from '@angular/core';
import { ChartItem } from '../charts/chart-item/chart-item';
import { ChartItemType } from '../charts/chart-item.type';
import { ChartItemFactory } from '../charts/chart-item.factory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public charts: ChartItem[] = [];

  constructor(private readonly _chartItemFactory: ChartItemFactory) {
  }

  chartCreated($event: ChartItemType): void {
    this.charts.push(this._chartItemFactory.createChartItem($event));
  }

  itemClose(item: ChartItem): void {
    const index = this.charts.indexOf(item);
    if (index !== -1) {
      this.charts.splice(index, 1);
    }
  }
    
}
