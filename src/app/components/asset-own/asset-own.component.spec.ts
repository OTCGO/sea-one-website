import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOwnComponent } from './asset-own.component';

describe('AssetOwnComponent', () => {
  let component: AssetOwnComponent;
  let fixture: ComponentFixture<AssetOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
