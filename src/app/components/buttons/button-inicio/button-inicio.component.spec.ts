import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInicioComponent } from './button-inicio.component';

describe('ButtonInicioComponent', () => {
  let component: ButtonInicioComponent;
  let fixture: ComponentFixture<ButtonInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
