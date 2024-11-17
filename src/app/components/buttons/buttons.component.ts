import { Component } from '@angular/core';
import { ButtonInicioComponent } from './button-inicio/button-inicio.component';
import { ButtonPrimarioComponent } from './button-primario/button-primario.component';
import { ButtonSecundarioComponent } from './button-secundario/button-secundario.component';
import { ButtonAceptarComponent } from './button-aceptar/button-aceptar.component';
import { ButtonCancelarComponent } from './button-cancelar/button-cancelar.component';
import { ButtonModoOscuroComponent } from './button-modo-oscuro/button-modo-oscuro.component';
import { InputsComponent } from '../inputs/inputs.component';
import { VisualizerComponent } from '../visualizer/visualizer.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonInicioComponent, ButtonPrimarioComponent, ButtonSecundarioComponent, ButtonAceptarComponent, ButtonCancelarComponent, ButtonModoOscuroComponent, InputsComponent,VisualizerComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  isDarkMode: boolean = false;
  constructor(
    public inputs: InputsComponent,
    public visualizer: VisualizerComponent
  ) {}

  onAccept() {
    this.inputs.validateInputs();
    this.visualizer.triggerAnimation();
  }

  onCancel() {
    this.inputs.clearInputs();
    this.visualizer.triggerAnimation();
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    // Cambia las clases del tema en el <body>
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
