import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component30Component } from './lib1component30.component';

describe('Lib1component30Component', () => {
  let component: Lib1component30Component;
  let fixture: ComponentFixture<Lib1component30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
