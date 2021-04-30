import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCaisComponent } from './meu-cais.component';

describe('MeuCaisComponent', () => {
  let component: MeuCaisComponent;
  let fixture: ComponentFixture<MeuCaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuCaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
