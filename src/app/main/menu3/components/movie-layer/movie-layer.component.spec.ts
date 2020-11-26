import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLayerComponent } from './movie-layer.component';

describe('MovieLayerComponent', () => {
  let component: MovieLayerComponent;
  let fixture: ComponentFixture<MovieLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
