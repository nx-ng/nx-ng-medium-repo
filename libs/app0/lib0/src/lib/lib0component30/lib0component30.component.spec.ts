import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component30Component } from './lib0component30.component';

describe('Lib0component30Component', () => {
  let component: Lib0component30Component;
  let fixture: ComponentFixture<Lib0component30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
