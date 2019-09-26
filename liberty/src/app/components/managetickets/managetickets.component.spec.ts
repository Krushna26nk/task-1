import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageticketsComponent } from './managetickets.component';

describe('ManageticketsComponent', () => {
  let component: ManageticketsComponent;
  let fixture: ComponentFixture<ManageticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
