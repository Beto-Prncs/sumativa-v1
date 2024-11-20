import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { VisualizerComponent } from './components/visualizer/visualizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsComponent, InputsComponent, VisualizerComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  email: string = '';
  password: string = '';
  text: string = '';

  // Referencia al componente visualizador
  animateVisualizer: any;

  handleAccept() {
    // Actualiza datos ingresados
    this.animateVisualizer.email = this.email;
    this.animateVisualizer.password = this.password;
    this.animateVisualizer.text = this.text;

    // Activa animación
    this.animateVisualizer.animateSquare();
  }
  isDarkMode = false;  // Variable para controlar el modo oscuro

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      console.log('Modo oscuro activado');
    } else {
      document.body.classList.remove('dark-mode');
      console.log('Modo oscuro desactivado');
    }
  }
}
