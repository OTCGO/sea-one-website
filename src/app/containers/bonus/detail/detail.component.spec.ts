import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBonusDetailPageComponent } from './detail.component';

describe('WalletBonusDetailPageComponent', () => {
  let component: WalletBonusDetailPageComponent;
  let fixture: ComponentFixture<WalletBonusDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBonusDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBonusDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
