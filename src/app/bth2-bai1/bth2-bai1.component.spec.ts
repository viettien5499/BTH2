import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth2Bai1Component } from './bth2-bai1.component';

describe('Bth2Bai1Component', () => {
  let component: Bth2Bai1Component;
  let fixture: ComponentFixture<Bth2Bai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth2Bai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth2Bai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
