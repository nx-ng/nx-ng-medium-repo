import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1parentComponent } from './lib1-lib1-lib1parent.component';

describe('Lib1Lib1Lib1parentComponent', () => {
  let component: Lib1Lib1Lib1parentComponent;
  let fixture: ComponentFixture<Lib1Lib1Lib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
