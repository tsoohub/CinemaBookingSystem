import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieoverviewComponent } from './movieoverview.component';

describe('MovieoverviewComponent', () => {
  let component: MovieoverviewComponent;
  let fixture: ComponentFixture<MovieoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
