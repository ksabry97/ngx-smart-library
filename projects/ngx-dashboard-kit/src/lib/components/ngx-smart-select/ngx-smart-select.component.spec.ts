import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartSelectComponent } from './ngx-smart-select.component';

describe('NgxSmartSelectComponent', () => {
  let component: NgxSmartSelectComponent;
  let fixture: ComponentFixture<NgxSmartSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
