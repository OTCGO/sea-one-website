import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIntroComponent } from './asset-intro.component';

describe('AssetIntroComponent', () => {
  let component: AssetIntroComponent;
  let fixture: ComponentFixture<AssetIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
