import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpidermanUniversComponent } from './spiderman-univers.component';

describe('SpidermanUniversComponent', () => {
  let component: SpidermanUniversComponent;
  let fixture: ComponentFixture<SpidermanUniversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpidermanUniversComponent]
    });
    fixture = TestBed.createComponent(SpidermanUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
