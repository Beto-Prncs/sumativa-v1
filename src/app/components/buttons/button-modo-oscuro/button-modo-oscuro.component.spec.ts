import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModoOscuroComponent } from './button-modo-oscuro.component';

describe('ButtonModoOscuroComponent', () => {
  let component: ButtonModoOscuroComponent;
  let fixture: ComponentFixture<ButtonModoOscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModoOscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonModoOscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
