import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRecordComponent } from './asset-record.component';

describe('AssetRecordComponent', () => {
  let component: AssetRecordComponent;
  let fixture: ComponentFixture<AssetRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
