import { Observable, of } from "rxjs";
import { TemperatureData } from "../data/temperature-data";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HumidityData } from "../data/humidity-data";
import { LightData } from "../data/light-data";
import { PressureData } from "../data/pressure-data";
import { Period } from "../data/period";

@Injectable({providedIn: "root"})
export class ChartsRemoteService {
  
  private readonly _baseUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41";
  constructor(private readonly _client: HttpClient) {
  }

  public getTemperatureData(period: Period): Observable<TemperatureData> {
    // const url = `${this._baseUrl}&hourly=temperature_2m`;
    // return this._client.get<TemperatureData>(url);
    return of({
      latitude: 1,
      longitude: 2,
      generationtime_ms: 1,
      utc_offset_seconds: 1,
      timezone: "",
      timezone_abbreviation: "",
      elevation: 1,
      hourly_units: {
        time: "12,13,14",
        temperature_2m: "rer"
      },
      hourly: {
        time: ["13:00","14:00","15:00"],
        temperature_2m: [ 
          this.random(40, 45),  
          this.random(40, 48),  
          this.random(40, 50)
        ]
      }
    });

  }

  public getHumidityData(period: Period): Observable<HumidityData> {
    //const url = `${this._baseUrl}&hourly=relative_humidity_2m`;
    //return this._client.get<HumidityData>(url);
    return of({
      latitude: 1,
      longitude: 2,
      generationtime_ms: 1,
      utc_offset_seconds: 1,
      timezone: "",
      timezone_abbreviation: "",
      elevation: 1,
      hourly_units: {
        time: "12,13,14",
        relative_humidity_2m: "rer"
      },
      hourly: {
        time: ["13:00","14:00","15:00"],
        relative_humidity_2m: [
          this.random(40, 35),  
          this.random(40, 38),  
          this.random(40, 33)
        ]
      }
    })
  }

  public getLightData(period: Period): Observable<LightData> {
    // const url = `${this._baseUrl}&hourly=dew_point_2m`;
    // return this._client.get<LightData>(url);
    return of({
      latitude: 1,
      longitude: 2,
      generationtime_ms: 1,
      utc_offset_seconds: 1,
      timezone: "",
      timezone_abbreviation: "",
      elevation: 1,
      hourly_units: {
        time: "12,13,14",
        dew_point_2m: "rer"
      },
      hourly: {
        time: ["13:00","14:00","15:00"],
        dew_point_2m: [
          this.random(80, 89),  
          this.random(40, 50),  
          this.random(20, 30)
        ]
      }
    })
  }

  public getPressureData(period: Period): Observable<PressureData> {
    // const url = `${this._baseUrl}&hourly=surface_pressure`;
    // return this._client.get<PressureData>(url);
    return of({
      latitude: 1,
      longitude: 2,
      generationtime_ms: 1,
      utc_offset_seconds: 1,
      timezone: "",
      timezone_abbreviation: "",
      elevation: 1,
      hourly_units: {
        time: "12,13,14",
        surface_pressure: "rer"
      },
      hourly: {
        time: ["13:00","14:00","15:00"],
        surface_pressure: [
          this.random(10, 20),  
          this.random(1, 10),  
          this.random(20, 30)
        ]
      }
    })
  }

  private random(min:number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}