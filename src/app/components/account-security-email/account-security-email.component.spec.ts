import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityEmailComponent } from './account-security-email.component';

describe('AccountSecurityEmailComponent', () => {
  let component: AccountSecurityEmailComponent;
  let fixture: ComponentFixture<AccountSecurityEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSecurityEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSecurityEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
