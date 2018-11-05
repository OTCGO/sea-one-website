import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMarketComponent } from './asset-market.component';

describe('AssetMarketComponent', () => {
  let component: AssetMarketComponent;
  let fixture: ComponentFixture<AssetMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
