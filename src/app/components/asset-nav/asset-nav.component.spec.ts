import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetNavComponent } from './asset-nav.component';

describe('AssetNavComponent', () => {
  let component: AssetNavComponent;
  let fixture: ComponentFixture<AssetNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
