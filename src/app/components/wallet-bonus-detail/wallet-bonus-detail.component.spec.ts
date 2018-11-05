import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBonusDetailComponent } from './wallet-bonus-detail.component';

describe('WalletBonusDetailComponent', () => {
  let component: WalletBonusDetailComponent;
  let fixture: ComponentFixture<WalletBonusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBonusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBonusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
