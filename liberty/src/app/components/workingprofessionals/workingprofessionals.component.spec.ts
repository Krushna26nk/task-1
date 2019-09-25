import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingprofessionalsComponent } from './workingprofessionals.component';

describe('WorkingprofessionalsComponent', () => {
  let component: WorkingprofessionalsComponent;
  let fixture: ComponentFixture<WorkingprofessionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingprofessionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingprofessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
