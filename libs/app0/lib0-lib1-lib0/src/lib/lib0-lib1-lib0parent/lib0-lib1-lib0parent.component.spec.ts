import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0parentComponent } from './lib0-lib1-lib0parent.component';

describe('Lib0Lib1Lib0parentComponent', () => {
  let component: Lib0Lib1Lib0parentComponent;
  let fixture: ComponentFixture<Lib0Lib1Lib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
