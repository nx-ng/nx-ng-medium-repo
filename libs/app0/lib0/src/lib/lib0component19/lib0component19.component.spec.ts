import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component19Component } from './lib0component19.component';

describe('Lib0component19Component', () => {
  let component: Lib0component19Component;
  let fixture: ComponentFixture<Lib0component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
