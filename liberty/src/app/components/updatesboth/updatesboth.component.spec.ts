import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesbothComponent } from './updatesboth.component';

describe('UpdatesbothComponent', () => {
  let component: UpdatesbothComponent;
  let fixture: ComponentFixture<UpdatesbothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesbothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesbothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
