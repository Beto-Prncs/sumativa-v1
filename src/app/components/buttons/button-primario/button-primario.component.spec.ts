import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimarioComponent } from './button-primario.component';

describe('ButtonPrimarioComponent', () => {
  let component: ButtonPrimarioComponent;
  let fixture: ComponentFixture<ButtonPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPrimarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
