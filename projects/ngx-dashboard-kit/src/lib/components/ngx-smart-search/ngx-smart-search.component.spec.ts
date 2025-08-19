import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartSearchComponent } from './ngx-smart-search.component';

describe('NgxSmartSearchComponent', () => {
  let component: NgxSmartSearchComponent;
  let fixture: ComponentFixture<NgxSmartSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
