import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartDatePickerComponent } from './ngx-smart-date-picker.component';

describe('NgxSmartDatePickerComponent', () => {
  let component: NgxSmartDatePickerComponent;
  let fixture: ComponentFixture<NgxSmartDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
