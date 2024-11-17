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
  title = 'myapp';
}
