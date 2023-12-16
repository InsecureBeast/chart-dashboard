import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

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
  
  chartData!: number[];
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.chartDataSource.subscribe(data => {
      this.chartData = data;
    });
  }

  close(): void {
    this.closed.emit();
  }

  changeStyle(chartStyle: "line" | "column"): void {
    // this.chartOptions = {
    //   series: [{
    //     data: [1, 2, 3],
    //     type: chartStyle
    //   }]
    // };
  }
}
