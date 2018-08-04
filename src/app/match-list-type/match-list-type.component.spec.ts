import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListTypeComponent } from './match-list-type.component';

describe('MatchListTypeComponent', () => {
  let component: MatchListTypeComponent;
  let fixture: ComponentFixture<MatchListTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
