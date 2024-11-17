import { Component } from '@angular/core';
import { DatosIngresadosComponent } from './datos-ingresados/datos-ingresados.component';
import { CajaAnimacionComponent } from './caja-animacion/caja-animacion.component';

@Component({
  selector: 'app-visualizer',
  standalone: true,
  imports: [CajaAnimacionComponent, DatosIngresadosComponent],
  templateUrl: './visualizer.component.html',
  styleUrl: './visualizer.component.css'
})
export class VisualizerComponent {
  animationClass: string = '';

  triggerAnimation() {
    this.animationClass = 'animate';
    setTimeout(() => {
      this.animationClass = ''; // Quita la clase después de la animación
    }, 1000); // Duración de la animación (en ms)
  }
}
