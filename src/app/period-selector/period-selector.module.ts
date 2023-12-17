import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { PeriodSelectorComponent } from './period-selector.component';

@NgModule({
  declarations: [
    PeriodSelectorComponent
  ],
  exports: [
    PeriodSelectorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule
  ],
  providers: [
  ],
})
export class PeriodSelectorModule { }
