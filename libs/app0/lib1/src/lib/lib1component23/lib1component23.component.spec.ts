import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component23Component } from './lib1component23.component';

describe('Lib1component23Component', () => {
  let component: Lib1component23Component;
  let fixture: ComponentFixture<Lib1component23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
