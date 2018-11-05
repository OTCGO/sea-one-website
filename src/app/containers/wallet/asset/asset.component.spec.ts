import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAssetPageComponent } from './asset.component';

describe('WalletAssetPageComponent', () => {
  let component: WalletAssetPageComponent;
  let fixture: ComponentFixture<WalletAssetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletAssetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAssetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
