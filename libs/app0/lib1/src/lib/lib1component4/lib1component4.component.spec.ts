import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component4Component } from './lib1component4.component';

describe('Lib1component4Component', () => {
  let component: Lib1component4Component;
  let fixture: ComponentFixture<Lib1component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
