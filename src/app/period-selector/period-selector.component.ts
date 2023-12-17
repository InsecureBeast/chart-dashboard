import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { PeriodSelectorService } from '../services/period-selector.service';

@Component({
  selector: 'app-period-selector',
  templateUrl: './period-selector.component.html',
  styleUrls: ['./period-selector.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule
  ]
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
