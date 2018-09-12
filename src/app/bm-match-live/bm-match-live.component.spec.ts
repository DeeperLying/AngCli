import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchLiveComponent } from './bm-match-live.component';

describe('BmMatchLiveComponent', () => {
  let component: BmMatchLiveComponent;
  let fixture: ComponentFixture<BmMatchLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
