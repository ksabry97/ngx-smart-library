import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartAlertComponent } from './ngx-smart-alert.component';

describe('NgxSmartAlertComponent', () => {
  let component: NgxSmartAlertComponent;
  let fixture: ComponentFixture<NgxSmartAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
