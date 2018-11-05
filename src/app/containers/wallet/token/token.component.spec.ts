import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTokenPageComponent } from './token.component';

describe('WalletTokenPageComponent', () => {
  let component: WalletTokenPageComponent;
  let fixture: ComponentFixture<WalletTokenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTokenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
