import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchFooterComponent } from './bm-match-footer.component';

describe('BmMatchFooterComponent', () => {
  let component: BmMatchFooterComponent;
  let fixture: ComponentFixture<BmMatchFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
