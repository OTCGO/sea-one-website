import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBonusWithdrawComponent } from './wallet-bonus-withdraw.component';

describe('WalletBonusWithdrawComponent', () => {
  let component: WalletBonusWithdrawComponent;
  let fixture: ComponentFixture<WalletBonusWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBonusWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBonusWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
