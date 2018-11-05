import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityMobileComponent } from './account-security-mobile.component';

describe('AccountSecurityMobileComponent', () => {
  let component: AccountSecurityMobileComponent;
  let fixture: ComponentFixture<AccountSecurityMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSecurityMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSecurityMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
