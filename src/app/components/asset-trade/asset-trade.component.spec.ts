import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTradeComponent } from './asset-trade.component';

describe('AssetTradeComponent', () => {
  let component: AssetTradeComponent;
  let fixture: ComponentFixture<AssetTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
