import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTitleComponent } from './wallet-title.component';

describe('WalletTitleComponent', () => {
  let component: WalletTitleComponent;
  let fixture: ComponentFixture<WalletTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
