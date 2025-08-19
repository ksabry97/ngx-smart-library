import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartFileUploaderComponent } from './ngx-smart-file-uploader.component';

describe('NgxSmartFileUploaderComponent', () => {
  let component: NgxSmartFileUploaderComponent;
  let fixture: ComponentFixture<NgxSmartFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSmartFileUploaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSmartFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
