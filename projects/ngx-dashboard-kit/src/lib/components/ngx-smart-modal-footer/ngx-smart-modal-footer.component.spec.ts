import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartModalFooterComponent } from './ngx-smart-modal-footer.component';

describe('NgxSmartModalFooterComponent', () => {
  let component: NgxSmartModalFooterComponent;
  let fixture: ComponentFixture<NgxSmartModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartModalFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
