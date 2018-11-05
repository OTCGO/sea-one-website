import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTradePageComponent } from './trade.component';

describe('WalletTradePageComponent', () => {
  let component: WalletTradePageComponent;
  let fixture: ComponentFixture<WalletTradePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTradePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTradePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
