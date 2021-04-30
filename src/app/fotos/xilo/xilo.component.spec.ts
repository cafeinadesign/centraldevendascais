import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiloComponent } from './xilo.component';

describe('XiloComponent', () => {
  let component: XiloComponent;
  let fixture: ComponentFixture<XiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XiloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
