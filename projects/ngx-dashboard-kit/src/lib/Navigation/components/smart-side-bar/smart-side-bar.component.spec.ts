import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSideBarComponent } from './smart-side-bar.component';

describe('SmartSideBarComponent', () => {
  let component: SmartSideBarComponent;
  let fixture: ComponentFixture<SmartSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
