import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component3Component } from './lib1component3.component';

describe('Lib1component3Component', () => {
  let component: Lib1component3Component;
  let fixture: ComponentFixture<Lib1component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
