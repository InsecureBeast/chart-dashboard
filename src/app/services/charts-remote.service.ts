import { Observable } from "rxjs";
import { TemperatureData } from "../data/temperature-data";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HumidityData } from "../data/humidity-data";
import { LightData } from "../data/light-data";
import { PressureData } from "../data/pressure-data";
import { ChartType } from "../charts/chart-type";

@Injectable({providedIn: "root"})
export class ChartsRemoteService {
  
  private readonly _baseUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41";
  constructor(private readonly _client: HttpClient, private readonly _paramFactory: ChartDataFactory) {
  }

  public getTemperatureData(): Observable<TemperatureData> {
    const url = `${this._baseUrl}&hourly=temperature_2m`;
    return this._client.get<TemperatureData>(url);
  }

  public getHumidityData(): Observable<HumidityData> {
    const url = `${this._baseUrl}&hourly=relative_humidity_2m`;
    return this._client.get<HumidityData>(url);
  }

  public getLightData(): Observable<LightData> {
    const url = `${this._baseUrl}&hourly=dew_point_2m`;
    return this._client.get<LightData>(url);
  }

  public getPressureData(): Observable<PressureData> {
    const url = `${this._baseUrl}&hourly=surface_pressure`;
    return this._client.get<PressureData>(url);
  }

  public getData<T>(type: ChartType): Observable<T> {
    const param = this._paramFactory.getChartParam(type);
    const url = `${this._baseUrl}&hourly=${param}`;
    return this._client.get<T>(url);
  }
}

@Injectable({providedIn: "root"})
export class ChartDataFactory {
  private readonly _map = new Map<ChartType, string>();

  constructor() {
    this._map.set(ChartType.Humidity, "relative_humidity_2m");
    this._map.set(ChartType.Light, "dew_point_2m");
    this._map.set(ChartType.Pressure, "surface_pressure");
    this._map.set(ChartType.Temperature, "temperature_2m");
  }

  public getChartParam(type: ChartType): string | undefined {
    return this._map.get(type);
  }
}