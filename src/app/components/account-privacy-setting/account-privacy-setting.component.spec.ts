import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPrivacySettingComponent } from './account-privacy-setting.component';

describe('AccountPrivacySettingComponent', () => {
  let component: AccountPrivacySettingComponent;
  let fixture: ComponentFixture<AccountPrivacySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPrivacySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPrivacySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
