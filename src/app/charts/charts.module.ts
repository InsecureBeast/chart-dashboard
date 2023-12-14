import { NgModule } from '@angular/core';
import { ChartItemComponent } from './chart-item/chart-item.component';
import { ChartOptionsDialogComponent } from './chart-options-dialog/chart-options-dialog.component';
import { ChartNewComponent } from './chart-new/chart-new.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    ChartOptionsDialogComponent,
    ChartNewComponent
  ],
  exports: [
    ChartOptionsDialogComponent,
    ChartItemComponent,
    ChartNewComponent
  ],
  imports: [
    ChartItemComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
})
export class ChartsModule { }
