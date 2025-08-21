import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnathourizedComponent } from './unathourized.component';

describe('UnathourizedComponent', () => {
  let component: UnathourizedComponent;
  let fixture: ComponentFixture<UnathourizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnathourizedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnathourizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
