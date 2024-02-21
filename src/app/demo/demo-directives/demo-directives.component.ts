import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-demo-directives',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule,
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.css'
})
export class DemoDirectivesComponent {
  couleur = 'chartreuse';
  fontSize = 14;
  isBordered = false;

  javanais = [
    {
      nom: 'Laurent',
      age: 3
    },
    {
      nom: 'Geoffrey',
      age: 99
    }
  ]

  constructor() {
    setInterval(()=> this.couleur = this.couleur == 'chartreuse'?'pink':'chartreuse', 250)
  }
}
