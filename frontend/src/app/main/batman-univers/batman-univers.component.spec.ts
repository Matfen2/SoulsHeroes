import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmanUniversComponent } from './batman-univers.component';

describe('BatmanUniversComponent', () => {
  let component: BatmanUniversComponent;
  let fixture: ComponentFixture<BatmanUniversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatmanUniversComponent]
    });
    fixture = TestBed.createComponent(BatmanUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
