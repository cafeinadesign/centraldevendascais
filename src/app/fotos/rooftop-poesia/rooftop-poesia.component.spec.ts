import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RooftopPoesiaComponent } from './rooftop-poesia.component';

describe('RooftopPoesiaComponent', () => {
  let component: RooftopPoesiaComponent;
  let fixture: ComponentFixture<RooftopPoesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RooftopPoesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RooftopPoesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
