import { Component, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { ChartStyle } from '../chart-style';
import { ChartItemType } from '../chart-item.type';
import { ChartItemFactory } from '../chart-item.factory';
import { ChartItem } from './chart-item';
import { ChartComponent } from '../chart/chart.component';

@Component({
    selector: 'app-chart-item',
    templateUrl: './chart-item.component.html',
    styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements AfterViewInit {

  @Input()
  chartItems!: ChartItem[];

  @Output()
  closed = new EventEmitter<void>();

  @ViewChild(ChartComponent)
  private _chartComponent!: ChartComponent;
  
  chartStyle: ChartStyle = "line";
  ChartItemType = ChartItemType;
  title: string = "";
  
  constructor(private readonly _chartItemFactory: ChartItemFactory) {
  }
  ngAfterViewInit(): void {
    this.title = this.chartItems[0].name;
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
    this.title = "Complex data"
  }
}
