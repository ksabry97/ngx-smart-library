import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDashboardKitComponent } from './ngx-dashboard-kit.component';

describe('NgxDashboardKitComponent', () => {
  let component: NgxDashboardKitComponent;
  let fixture: ComponentFixture<NgxDashboardKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDashboardKitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDashboardKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
