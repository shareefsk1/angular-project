import { TestBed } from '@angular/core/testing';

import { NotifyForEmployeeGuard } from './notify-for-employee.guard';

describe('NotifyForEmployeeGuard', () => {
  let guard: NotifyForEmployeeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotifyForEmployeeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
