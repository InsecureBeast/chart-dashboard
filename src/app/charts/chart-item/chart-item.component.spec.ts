import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartItemComponent } from './chart-item.component';

describe('ChartComponent', () => {
  let component: ChartItemComponent;
  let fixture: ComponentFixture<ChartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
