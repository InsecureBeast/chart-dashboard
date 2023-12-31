import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChartItemComponent } from './chart-new.component';

describe('ChartNewComponent', () => {
  let component: NewChartItemComponent;
  let fixture: ComponentFixture<NewChartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
