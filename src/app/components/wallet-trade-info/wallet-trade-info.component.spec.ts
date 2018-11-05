import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTradeInfoComponent } from './wallet-trade-info.component';

describe('WalletTradeInfoComponent', () => {
  let component: WalletTradeInfoComponent;
  let fixture: ComponentFixture<WalletTradeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTradeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTradeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
