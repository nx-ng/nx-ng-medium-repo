import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib0parentComponent } from './lib0-lib0-lib0parent.component';

describe('Lib0Lib0Lib0parentComponent', () => {
  let component: Lib0Lib0Lib0parentComponent;
  let fixture: ComponentFixture<Lib0Lib0Lib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
