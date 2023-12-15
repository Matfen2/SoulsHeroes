import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmanComicsComponent } from './batman-comics.component';

describe('BatmanComicsComponent', () => {
  let component: BatmanComicsComponent;
  let fixture: ComponentFixture<BatmanComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatmanComicsComponent]
    });
    fixture = TestBed.createComponent(BatmanComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
