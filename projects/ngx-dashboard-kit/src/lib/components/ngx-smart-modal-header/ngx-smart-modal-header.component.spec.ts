import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartModalHeaderComponent } from './ngx-smart-modal-header.component';

describe('NgxSmartModalHeaderComponent', () => {
  let component: NgxSmartModalHeaderComponent;
  let fixture: ComponentFixture<NgxSmartModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartModalHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
