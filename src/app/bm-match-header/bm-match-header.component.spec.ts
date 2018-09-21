import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchHeaderComponent } from './bm-match-header.component';

describe('BmMatchHeaderComponent', () => {
  let component: BmMatchHeaderComponent;
  let fixture: ComponentFixture<BmMatchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
