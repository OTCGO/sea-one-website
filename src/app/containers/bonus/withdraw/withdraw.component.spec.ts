import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBonusWithdrawPageComponent } from './withdraw.component';

describe('WalletBonusWithdrawPageComponent', () => {
  let component: WalletBonusWithdrawPageComponent;
  let fixture: ComponentFixture<WalletBonusWithdrawPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBonusWithdrawPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBonusWithdrawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
