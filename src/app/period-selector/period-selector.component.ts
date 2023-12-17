import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PeriodSelectorService } from '../services/period-selector.service';

@Component({
  selector: 'app-period-selector',
  templateUrl: './period-selector.component.html',
  styleUrls: ['./period-selector.component.scss']
})
export class PeriodSelectorComponent implements OnInit {

  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  constructor(private readonly _periodSelectorService: PeriodSelectorService) {

  } 
  ngOnInit(): void {
    const period = this._periodSelectorService.currentPeriod;
    this.range.setValue({startDate: period.startDate, endDate: period.endDate});
  }

  dateRangeChanged() {
    if (!this.range.valid)
      return;
    
    this._periodSelectorService.changePeriod({
      startDate: <Date>this.range.value.startDate, 
      endDate: <Date>this.range.value.endDate
    });
  }
}
