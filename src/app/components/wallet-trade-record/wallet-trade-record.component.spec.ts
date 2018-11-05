import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTradeRecordComponent } from './wallet-trade-record.component';

describe('WalletTradeRecordComponent', () => {
  let component: WalletTradeRecordComponent;
  let fixture: ComponentFixture<WalletTradeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTradeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTradeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
