import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RooftopArteComponent } from './rooftop-arte.component';

describe('RooftopArteComponent', () => {
  let component: RooftopArteComponent;
  let fixture: ComponentFixture<RooftopArteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RooftopArteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RooftopArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
