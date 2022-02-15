import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component68Component } from './lib1component68.component';

describe('Lib1component68Component', () => {
  let component: Lib1component68Component;
  let fixture: ComponentFixture<Lib1component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
