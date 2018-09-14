import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchTeamComponent } from './bm-match-team.component';

describe('BmMatchTeamComponent', () => {
  let component: BmMatchTeamComponent;
  let fixture: ComponentFixture<BmMatchTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
