import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBonusTotalPageComponent } from './total.component';

describe('WalletBonusTotalPageComponent', () => {
  let component: WalletBonusTotalPageComponent;
  let fixture: ComponentFixture<WalletBonusTotalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBonusTotalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBonusTotalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
