import { Injectable } from "@angular/core";
import { ChartType } from "./chart-type";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ChartItemCreateService {

  private _chartType: Subject<ChartType> = new Subject<ChartType>();

  public get chartItemCreated(): Observable<ChartType> {
    return this._chartType.asObservable();
  }

  public createChartItem(type: ChartType): void {
    this._chartType.next(type);
  }
}