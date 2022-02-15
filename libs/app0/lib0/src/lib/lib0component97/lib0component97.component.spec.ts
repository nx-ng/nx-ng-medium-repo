import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component97Component } from './lib0component97.component';

describe('Lib0component97Component', () => {
  let component: Lib0component97Component;
  let fixture: ComponentFixture<Lib0component97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
