import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component68Component } from './lib0component68.component';

describe('Lib0component68Component', () => {
  let component: Lib0component68Component;
  let fixture: ComponentFixture<Lib0component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
