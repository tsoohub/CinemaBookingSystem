import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecrudComponent } from './moviecrud.component';

describe('MoviecrudComponent', () => {
  let component: MoviecrudComponent;
  let fixture: ComponentFixture<MoviecrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
