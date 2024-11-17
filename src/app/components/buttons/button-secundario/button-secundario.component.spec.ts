import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecundarioComponent } from './button-secundario.component';

describe('ButtonSecundarioComponent', () => {
  let component: ButtonSecundarioComponent;
  let fixture: ComponentFixture<ButtonSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSecundarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
