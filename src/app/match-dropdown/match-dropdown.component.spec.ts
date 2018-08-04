import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDropdownComponent } from './match-dropdown.component';

describe('MatchDropdownComponent', () => {
  let component: MatchDropdownComponent;
  let fixture: ComponentFixture<MatchDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
