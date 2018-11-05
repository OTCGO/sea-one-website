import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTokenAllComponent } from './wallet-token-all.component';

describe('WalletTokenAllComponent', () => {
  let component: WalletTokenAllComponent;
  let fixture: ComponentFixture<WalletTokenAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTokenAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTokenAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
