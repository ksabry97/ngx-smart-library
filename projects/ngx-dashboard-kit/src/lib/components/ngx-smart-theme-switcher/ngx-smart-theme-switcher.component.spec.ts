import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartThemeSwitcherComponent } from './ngx-smart-theme-switcher.component';

describe('NgxSmartThemeSwitcherComponent', () => {
  let component: NgxSmartThemeSwitcherComponent;
  let fixture: ComponentFixture<NgxSmartThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartThemeSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
