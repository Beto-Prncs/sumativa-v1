import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DatosIngresadosComponent } from './datos-ingresados/datos-ingresados.component';


@Component({
  selector: 'app-visualizer',
  standalone: true,
  imports: [ DatosIngresadosComponent],
  templateUrl: './visualizer.component.html',
  styleUrl: './visualizer.component.css'
})
export class VisualizerComponent implements OnInit, OnDestroy  {
  isAnimating = false;
  @Input() email: string = ''; // Recibe el correo desde otro componente
  @Input() password: string = ''; // Recibe la contraseña
  @Input() text: string = ''; // Recibe el texto

  ngOnInit() {
    // Añadir el evento mousemove al cargar el componente
    document.body.addEventListener('mousemove', this.eyeball);
  }

  ngOnDestroy() {
    // Eliminar el evento para evitar fugas de memoria
    document.body.removeEventListener('mousemove', this.eyeball);
  }

  eyeball = (event: MouseEvent): void => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
      const rect = eye.getBoundingClientRect();
      const x = rect.left + eye.clientWidth / 2;
      const y = rect.top + eye.clientHeight / 2;
      const radian = Math.atan2(event.pageX - x, event.pageY - y);
      const rotation = radian * (180 / Math.PI) * -1 + 270;
      (eye as HTMLElement).style.transform = `rotate(${rotation}deg)`;
    });
  };
  
}
