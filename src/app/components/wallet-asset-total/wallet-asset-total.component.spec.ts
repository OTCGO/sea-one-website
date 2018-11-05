import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAssetTotalComponent } from './wallet-asset-total.component';

describe('WalletAssetTotalComponent', () => {
  let component: WalletAssetTotalComponent;
  let fixture: ComponentFixture<WalletAssetTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletAssetTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAssetTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
