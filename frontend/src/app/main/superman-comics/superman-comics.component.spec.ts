import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanComicsComponent } from './superman-comics.component';

describe('SupermanComicsComponent', () => {
  let component: SupermanComicsComponent;
  let fixture: ComponentFixture<SupermanComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermanComicsComponent]
    });
    fixture = TestBed.createComponent(SupermanComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
