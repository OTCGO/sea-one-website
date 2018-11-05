import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityKeyComponent } from './account-security-key.component';

describe('AccountSecurityKeyComponent', () => {
  let component: AccountSecurityKeyComponent;
  let fixture: ComponentFixture<AccountSecurityKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSecurityKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSecurityKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
