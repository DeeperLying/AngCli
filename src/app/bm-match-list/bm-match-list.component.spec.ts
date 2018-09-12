import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchListComponent } from './bm-match-list.component';

describe('BmMatchListComponent', () => {
  let component: BmMatchListComponent;
  let fixture: ComponentFixture<BmMatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
