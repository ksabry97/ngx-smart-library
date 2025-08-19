import { TestBed } from '@angular/core/testing';

import { NgxDashboardKitService } from './ngx-dashboard-kit.service';

describe('NgxDashboardKitService', () => {
  let service: NgxDashboardKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDashboardKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
