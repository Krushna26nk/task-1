import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphcontaineComponent } from './graphcontaine.component';

describe('GraphcontaineComponent', () => {
  let component: GraphcontaineComponent;
  let fixture: ComponentFixture<GraphcontaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphcontaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphcontaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
