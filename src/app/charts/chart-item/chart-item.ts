import { Observable, map } from "rxjs";
import { ChartsRemoteService } from "src/app/services/charts-remote.service";

export abstract class ChartItem {
  abstract get source(): Observable<number[]>;
  abstract get name(): string;
}

export class TemperatureChartItem extends ChartItem {
  constructor(private readonly _chartService: ChartsRemoteService) {
    super();
  }
  
  override get source(): Observable<number[]> {
    return this._chartService.getTemperatureData().pipe(map(data => data.hourly.temperature_2m));
  }

  override get name(): string {
    return "Temperature";
  }
}

export class PressureChartItem extends ChartItem {
  
  constructor(private readonly _chartService: ChartsRemoteService) {
    super();
  }
  
  override get source(): Observable<number[]> {
    return this._chartService.getPressureData().pipe(map(data => data.hourly.surface_pressure));
  }

  override get name(): string {
    return "Pressure";
  }
}

export class HumidityChartItem extends ChartItem {
  
  constructor(private readonly _chartService: ChartsRemoteService) {
    super();
  }
  
  override get source(): Observable<number[]> {
    return this._chartService.getHumidityData().pipe(map(data => data.hourly.relative_humidity_2m));
  }

  override get name(): string {
    return "Humidity";
  }
}

export class LightChartItem extends ChartItem {
  
  constructor(private readonly _chartService: ChartsRemoteService) {
    super();
  }
  
  override get source(): Observable<number[]> {
    return this._chartService.getLightData().pipe(map(data => data.hourly.dew_point_2m));
  }

  override get name(): string {
    return "Light";
  }
}