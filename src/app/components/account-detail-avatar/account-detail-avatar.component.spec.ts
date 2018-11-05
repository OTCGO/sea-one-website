import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailAvatarComponent } from './account-detail-avatar.component';

describe('AccountDetailAvatarComponent', () => {
  let component: AccountDetailAvatarComponent;
  let fixture: ComponentFixture<AccountDetailAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
