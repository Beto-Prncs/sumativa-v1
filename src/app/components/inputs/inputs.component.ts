import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputContrasenaComponent } from './input-contrasena/input-contrasena.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputTextoComponent } from './input-texto/input-texto.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [InputContrasenaComponent, InputEmailComponent, InputTextoComponent, FormsModule, CommonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  @Input() email: string = '';
  @Output() emailChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() password: string = '';
  @Output() passwordChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() text: string = '';
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();

  // Validaciones opcionales
  @Input() emailValid: boolean | null = null;
  @Input() passwordValid: boolean | null = null;

  // Métodos para emitir cambios
  onEmailChange(): void {
    this.emailChange.emit(this.email);
    this.emailValid = this.email.includes('@'); // Validación de ejemplo
  }

  onPasswordChange(): void {
    this.passwordChange.emit(this.password);
    this.passwordValid = this.password.length >= 8; // Validación de ejemplo
  }

  onTextChange(): void {
    this.textChange.emit(this.text);
  }
}
