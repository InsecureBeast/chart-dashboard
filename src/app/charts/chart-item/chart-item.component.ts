import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChartType } from '../chart-type';
import { ChartsRemoteService } from 'src/app/services/charts-remote.service';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.scss'],
  standalone: true,
  imports:  [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ]
})
export class ChartItemComponent implements OnInit{

  @Input()
  public type!: ChartType;

  @Output()
  public closed = new EventEmitter<void>();
  
  constructor(private readonly _chartsService: ChartsRemoteService) {
    
  }

  ngOnInit(): void {
    this._chartsService.getHumidityData().subscribe()
  }

  close(): void {
    this.closed.emit();
  }
}
