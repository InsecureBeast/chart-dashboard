import { Injectable } from "@angular/core";
import { ChartItem } from "./chart-item/chart-item";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ChartUpdateService {

  private readonly _seriesAdded: Subject<ChartItem> = new Subject();

  public get seriesAdded(): Observable<ChartItem> {
    return this._seriesAdded.asObservable();
  }

  addSeries(item: ChartItem): void {
    this._seriesAdded.next(item);
  }
}