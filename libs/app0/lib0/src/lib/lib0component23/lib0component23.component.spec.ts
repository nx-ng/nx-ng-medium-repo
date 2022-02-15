import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component23Component } from './lib0component23.component';

describe('Lib0component23Component', () => {
  let component: Lib0component23Component;
  let fixture: ComponentFixture<Lib0component23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
