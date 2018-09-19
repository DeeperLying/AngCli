import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchDetailComponent } from './bm-match-detail.component';

describe('BmMatchDetailComponent', () => {
  let component: BmMatchDetailComponent;
  let fixture: ComponentFixture<BmMatchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
