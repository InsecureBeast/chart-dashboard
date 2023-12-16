import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import { Observable } from 'rxjs';
import { ChartStyle } from '../chart-style';

HC_stock(Highcharts);

interface ExtendedPlotCandlestickDataGroupingOptions extends Highcharts.DataGroupingOptionsObject{
  enabled: boolean
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  private _chartStyle: ChartStyle = "line";

  @Input() dataSource!: Observable<number[]>;
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
  
  constructor() {
    this.chartOptions = this.initChartOptions();
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  };

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
    this.dataSource.subscribe(data  => {
      const chartData = [ ...data ];
      const series = this.createSeriesOptions(chartData);
      this.addSeries(series, false);
      this.update(chartData);
    });
  }

  private update(data: number[]): void {
    this.chartRef.update({ 
      navigator: {
        series: {
         data: data
        }
      }
    });
  }

  private addSeries(options: Highcharts.SeriesOptionsType, redraw?: boolean): void {
    this.chartRef.addSeries(options, redraw);
  }
  private createSeriesOptions(data: number[]): Highcharts.SeriesOptionsType {
    return { 
      type: this.chartStyle,
      data: data,
      dataGrouping: {
        enabled: false
      }// as ExtendedPlotCandlestickDataGroupingOptions
    }
  }

  private updateStyle(): void {
    if (!this.chartRef)
      return;

    this.chartRef.series.forEach(serie => {
      serie.remove(false);
    })

    this.loadChartData();
  }
}
