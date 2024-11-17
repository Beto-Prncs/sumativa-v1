import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContrasenaComponent } from './input-contrasena.component';

describe('InputContrasenaComponent', () => {
  let component: InputContrasenaComponent;
  let fixture: ComponentFixture<InputContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputContrasenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
