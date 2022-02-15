import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component66Component } from './lib0component66.component';

describe('Lib0component66Component', () => {
  let component: Lib0component66Component;
  let fixture: ComponentFixture<Lib0component66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
