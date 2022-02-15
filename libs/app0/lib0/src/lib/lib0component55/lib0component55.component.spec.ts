import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component55Component } from './lib0component55.component';

describe('Lib0component55Component', () => {
  let component: Lib0component55Component;
  let fixture: ComponentFixture<Lib0component55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
