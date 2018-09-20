import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMatchLoginComponent } from './bm-match-login.component';

describe('BmMatchLoginComponent', () => {
  let component: BmMatchLoginComponent;
  let fixture: ComponentFixture<BmMatchLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMatchLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMatchLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
