import { Component, Input, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import { Subject } from 'rxjs';
import { ChartStyle } from '../chart-style';
import { ChartUpdateService } from '../chart-update.service';
import { ChartItem } from '../chart-item/chart-item';

HC_stock(Highcharts);

interface ExtendedPlotCandlestickDataGroupingOptions extends Highcharts.DataGroupingOptionsObject{
  enabled: boolean
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnDestroy {
  private _chartStyle!: ChartStyle;
  private _destroy: Subject<void> = new Subject<void>();

  @Input() chartItems: ChartItem[] = [];
  @Input()
  set chartStyle(style: ChartStyle) {
    this._chartStyle = style;
    this.updateStyle();
  }
  get chartStyle(): ChartStyle {
    return this._chartStyle;
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartRef!: Highcharts.Chart;
  chartOptions: Highcharts.Options;
  
  constructor(private readonly _chartUpdateService: ChartUpdateService) {
    this.chartOptions = this.initChartOptions();
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  };

  addChartItem(item: ChartItem): void {
    if (this.chartItems.find(i => i.name === item.name))
      return;
    
    this.chartItems.push(item);
    item.source.subscribe(data  => {
      const series = this.createSeriesOptions(data, item.name);
      this.chartRef.addSeries(series, true);
    });
  }

  private initChartOptions(): Highcharts.Options {
    return {
      chart: {
        events: {
          load: () => this.loadChartData()
        },
      }, 
      title: {
        text: undefined
      }
    };
  }

  private loadChartData(): void {
    this.chartItems.forEach(item => {
      item.source.subscribe(data  => {
        const series = this.createSeriesOptions(data, item.name);
        this.chartRef.addSeries(series, true);
      });
    });
  }

  private createSeriesOptions(data: number[], name: string): Highcharts.SeriesOptionsType {
    return { 
      type: this.chartStyle,
      data: data,
      name: name,
      dataGrouping: {
        enabled: false
      } as ExtendedPlotCandlestickDataGroupingOptions
    }
  }

  private updateStyle(): void {
    if (!this.chartRef)
      return;

    const series = [...this.chartRef.series];
    series.forEach(series => {
      series.remove(true);
    })

    this.loadChartData();
  }
}
