import { Component } from '@angular/core';

@Component({
  selector: 'app-button-inicio',
  standalone: true,
  imports: [],
  templateUrl: './button-inicio.component.html',
  styleUrl: './button-inicio.component.css'
})
export class ButtonInicioComponent {
  onClick() {
    console.log('Botón Inicio presionado');
    
  }
}
