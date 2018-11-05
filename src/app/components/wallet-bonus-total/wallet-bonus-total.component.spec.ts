import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBonusTotalComponent } from './wallet-bonus-total.component';

describe('WalletBonusTotalComponent', () => {
  let component: WalletBonusTotalComponent;
  let fixture: ComponentFixture<WalletBonusTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBonusTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBonusTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
