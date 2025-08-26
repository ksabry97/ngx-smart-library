import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartSpinnerComponent } from './ngx-smart-spinner.component';

describe('NgxSmartSpinnerComponent', () => {
  let component: NgxSmartSpinnerComponent;
  let fixture: ComponentFixture<NgxSmartSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
