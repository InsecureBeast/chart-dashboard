import { Component, EventEmitter, Output } from '@angular/core';
import { ChartItemType } from '../chart-item.type';

@Component({
  selector: 'app-chart-new',
  templateUrl: './chart-new.component.html',
  styleUrls: ['./chart-new.component.scss']
})
export class NewChartItemComponent {

  @Output()
  public chartCreated = new EventEmitter<ChartItemType>();

  ChartItemType = ChartItemType;

  createItem(type: ChartItemType) {
    this.chartCreated.emit(type);
  }

}
