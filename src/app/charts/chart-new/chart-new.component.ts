import { Component, EventEmitter, Output } from '@angular/core';
import { ChartType } from '../chart-type';

@Component({
  selector: 'app-chart-new',
  templateUrl: './chart-new.component.html',
  styleUrls: ['./chart-new.component.scss']
})
export class ChartNewComponent {

  @Output()
  public chartCreated = new EventEmitter<ChartType>();

  createItem(type: ChartType) {
    this.chartCreated.emit(type);
  }

}
