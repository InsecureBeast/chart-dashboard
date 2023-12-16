import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import { Observable } from 'rxjs';

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

  @Input() data: number[] = [];
  @Input() dataSource!: Observable<number[]>;

  chartStyle: "line" | "column" = "line";
  Highcharts: typeof Highcharts = Highcharts;
  chartRef!: Highcharts.Chart;
  chartOptions: Highcharts.Options = {
    chart: {
      events: {
        load: () => this.loadChartData()
      },
      
    }, 
    title: {
      text: undefined
    }
  };

  constructor() {
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  };

  private loadChartData(): void {
    this.dataSource.subscribe(data  => {
      const chartData = [ ...data ];
      const series = this.createSeriesOptions(chartData);
      this.addSeries(series, false);
      this.update(chartData);
    });

    // const chartData = this.data;// [ ...this.data ];
    // const series = this.createSeriesOptions(chartData);
    // this.addSeries(series, false);
    // this.update(chartData);
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
}
