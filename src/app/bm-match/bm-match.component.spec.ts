import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchComponent } from './bm-match.component';

describe('BmMatchComponent', () => {
  let component: BmMatchComponent;
  let fixture: ComponentFixture<BmMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
