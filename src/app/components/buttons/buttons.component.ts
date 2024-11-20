import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonInicioComponent } from './button-inicio/button-inicio.component';
import { ButtonPrimarioComponent } from './button-primario/button-primario.component';
import { ButtonSecundarioComponent } from './button-secundario/button-secundario.component';
import { ButtonAceptarComponent } from './button-aceptar/button-aceptar.component';
import { ButtonCancelarComponent } from './button-cancelar/button-cancelar.component';
import { ButtonModoOscuroComponent } from './button-modo-oscuro/button-modo-oscuro.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonInicioComponent, ButtonPrimarioComponent, ButtonSecundarioComponent, ButtonAceptarComponent, ButtonCancelarComponent, ButtonModoOscuroComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    // Cambia el modo oscuro en el body globalmente
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');  // Añade la clase dark-mode al body
    } else {
      document.body.classList.remove('dark-mode');  // Elimina la clase dark-mode del body
    }
  }
  @Output() onAccept = new EventEmitter<void>();

  handleAccept() {
    this.onAccept.emit();
  }
}
