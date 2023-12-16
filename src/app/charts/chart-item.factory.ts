import { Injectable } from "@angular/core";
import { ChartItemType } from "./chart-item.type";
import { ChartItem, HumidityChartItem, LightChartItem, PressureChartItem, TemperatureChartItem } from "./chart-item/chart-item";
import { ChartsRemoteService } from "src/app/services/charts-remote.service";

@Injectable({providedIn: "root"})
export class ChartItemFactory {

  constructor(private readonly _chartsService: ChartsRemoteService) {
    
  }

  createChartItem(type: ChartItemType): ChartItem {
    switch (type) {
      case ChartItemType.Humidity:
        return new HumidityChartItem(this._chartsService);
      case ChartItemType.Pressure:
        return new PressureChartItem(this._chartsService);  
      case ChartItemType.Light:
        return new LightChartItem(this._chartsService);  
      case ChartItemType.Temperature:
          return new TemperatureChartItem(this._chartsService);  
      default:
        throw new Error("unsupported chart type");
    }
  }

}