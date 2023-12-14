import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainToolbarComponent } from './main-toolbar.component';

@NgModule({
  declarations: [
    MainToolbarComponent,
  ],
  exports: [
    MainToolbarComponent
  ],
  imports: [
    MatToolbarModule    
  ],
  providers: [],
})
export class MainToolbarModule { }
