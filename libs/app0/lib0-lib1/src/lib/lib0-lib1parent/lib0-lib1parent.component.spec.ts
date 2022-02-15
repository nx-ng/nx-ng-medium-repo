import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1parentComponent } from './lib0-lib1parent.component';

describe('Lib0Lib1parentComponent', () => {
  let component: Lib0Lib1parentComponent;
  let fixture: ComponentFixture<Lib0Lib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
