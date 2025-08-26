import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartConfirmationComponent } from './ngx-smart-confirmation.component';

describe('NgxSmartConfirmationComponent', () => {
  let component: NgxSmartConfirmationComponent;
  let fixture: ComponentFixture<NgxSmartConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
