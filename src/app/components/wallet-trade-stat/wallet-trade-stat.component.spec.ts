import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTradeStatComponent } from './wallet-trade-stat.component';

describe('WalletTradeStatComponent', () => {
  let component: WalletTradeStatComponent;
  let fixture: ComponentFixture<WalletTradeStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTradeStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTradeStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
