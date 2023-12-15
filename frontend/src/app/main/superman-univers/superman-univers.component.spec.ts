import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanUniversComponent } from './superman-univers.component';

describe('SupermanUniversComponent', () => {
  let component: SupermanUniversComponent;
  let fixture: ComponentFixture<SupermanUniversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermanUniversComponent]
    });
    fixture = TestBed.createComponent(SupermanUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
