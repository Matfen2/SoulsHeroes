import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpidermanComicsComponent } from './spiderman-comics.component';

describe('SpidermanComicsComponent', () => {
  let component: SpidermanComicsComponent;
  let fixture: ComponentFixture<SpidermanComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpidermanComicsComponent]
    });
    fixture = TestBed.createComponent(SpidermanComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
