import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartPasswordComponent } from './ngx-smart-password.component';

describe('NgxSmartPasswordComponent', () => {
  let component: NgxSmartPasswordComponent;
  let fixture: ComponentFixture<NgxSmartPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
