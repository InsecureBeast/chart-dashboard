import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ChartStyle } from '../chart-style';
import { ChartUpdateService } from '../chart-update.service';
import { ChartItemType } from '../chart-item.type';
import { ChartItemFactory } from '../chart-item.factory';
import { ChartItem } from './chart-item';
import { ChartComponent } from '../chart/chart.component';

@Component({
    selector: 'app-chart-item',
    templateUrl: './chart-item.component.html',
    styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent{

  @Input()
  chartItems!: ChartItem[];

  @Output()
  closed = new EventEmitter<void>();

  @ViewChild(ChartComponent)
  private _chartComponent!: ChartComponent;
  
  chartStyle: ChartStyle = "line";
  ChartItemType = ChartItemType;
  get title(): string {
    return this.chartItems[0].name;
  }
  
  constructor(
    private readonly _chartUpdateService: ChartUpdateService,
    private readonly _chartItemFactory: ChartItemFactory) {
    
  }

  close(): void {
    this.closed.emit();
  }

  changeStyle(chartStyle: ChartStyle): void {
    this.chartStyle = chartStyle;
  }

  addSeries(type: ChartItemType) {
    const item = this._chartItemFactory.createChartItem(type);
    this._chartComponent?.addChartItem(item);
  }
}
