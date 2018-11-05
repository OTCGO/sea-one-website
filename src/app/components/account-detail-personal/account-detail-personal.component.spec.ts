import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailPersonalComponent } from './account-detail-personal.component';

describe('AccountDetailPersonalComponent', () => {
  let component: AccountDetailPersonalComponent;
  let fixture: ComponentFixture<AccountDetailPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
