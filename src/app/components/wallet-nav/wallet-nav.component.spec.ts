import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletNavComponent } from './wallet-nav.component';

describe('WalletNavComponent', () => {
  let component: WalletNavComponent;
  let fixture: ComponentFixture<WalletNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
