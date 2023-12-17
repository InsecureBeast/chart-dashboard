import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Period } from "../data/period";

@Injectable({providedIn: "root"})
export class PeriodSelectorService {
  private readonly _periodSelected: BehaviorSubject<Period> = new BehaviorSubject(new Period());

  get periodSelected(): Observable<Period> {
    return this._periodSelected.asObservable();
  }

  get currentPeriod(): Period {
    return this._periodSelected.value;
  }

  changePeriod(item: Period): void {
    this._periodSelected.next(item);
  }
}