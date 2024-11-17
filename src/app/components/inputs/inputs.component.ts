import { Component } from '@angular/core';
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
  email: string = '';
  password: string = '';
  text: string = '';

  emailValid: boolean | null = null;
  passwordValid: boolean | null = null;

  validateInputs() {
    this.emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    this.passwordValid = this.password.length >= 8 && /[A-Z]/.test(this.password);
  }

  clearInputs() {
    this.email = '';
    this.password = '';
    this.text = '';
    this.emailValid = null;
    this.passwordValid = null;
  }
}
