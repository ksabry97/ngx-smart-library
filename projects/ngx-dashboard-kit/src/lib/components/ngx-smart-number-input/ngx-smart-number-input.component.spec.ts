import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartNumberInputComponent } from './ngx-smart-number-input.component';

describe('NgxSmartNumberInputComponent', () => {
  let component: NgxSmartNumberInputComponent;
  let fixture: ComponentFixture<NgxSmartNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartNumberInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
