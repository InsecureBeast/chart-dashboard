import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOptionsDialogComponent } from './chart-options-dialog.component';

describe('ChartOptionsDialogComponent', () => {
  let component: ChartOptionsDialogComponent;
  let fixture: ComponentFixture<ChartOptionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOptionsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
