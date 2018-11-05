import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAssetActionComponent } from './wallet-asset-action.component';

describe('WalletAssetActionComponent', () => {
  let component: WalletAssetActionComponent;
  let fixture: ComponentFixture<WalletAssetActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletAssetActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAssetActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
