import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityPasswordComponent } from './account-security-password.component';

describe('AccountSecurityPasswordComponent', () => {
  let component: AccountSecurityPasswordComponent;
  let fixture: ComponentFixture<AccountSecurityPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSecurityPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSecurityPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
