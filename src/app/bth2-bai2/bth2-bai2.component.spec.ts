import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth2Bai2Component } from './bth2-bai2.component';

describe('Bth2Bai2Component', () => {
  let component: Bth2Bai2Component;
  let fixture: ComponentFixture<Bth2Bai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth2Bai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth2Bai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
