import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib0parentComponent } from './lib1-lib0-lib0parent.component';

describe('Lib1Lib0Lib0parentComponent', () => {
  let component: Lib1Lib0Lib0parentComponent;
  let fixture: ComponentFixture<Lib1Lib0Lib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
