import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartStyle } from '../chart-style';

@Component({
    selector: 'app-chart-item',
    templateUrl: './chart-item.component.html',
    styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements OnInit{

  @Input()
  chartDataSource!: Observable<number[]>;
  @Input() 
  title!: string;

  @Output()
  closed = new EventEmitter<void>();
  
  chartStyle: ChartStyle = "line";
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

  close(): void {
    this.closed.emit();
  }

  changeStyle(chartStyle: ChartStyle): void {
    this.chartStyle = chartStyle;
  }
}
