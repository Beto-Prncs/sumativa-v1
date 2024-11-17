import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaAnimacionComponent } from './caja-animacion.component';

describe('CajaAnimacionComponent', () => {
  let component: CajaAnimacionComponent;
  let fixture: ComponentFixture<CajaAnimacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaAnimacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaAnimacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
