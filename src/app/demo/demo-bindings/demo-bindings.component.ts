import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-demo-bindings',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.css'
})
export class DemoBindingsComponent {
  reponseATout = 42;
  monInput: string = "Coucou";
  bool: boolean = true;
}
