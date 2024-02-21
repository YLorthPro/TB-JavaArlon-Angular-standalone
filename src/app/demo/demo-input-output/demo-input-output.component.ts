import { Component } from '@angular/core';
import {EnfantComponent} from "./enfant/enfant.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-demo-input-output',
  standalone: true,
  imports: [
    EnfantComponent,
    NgForOf
  ],
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.css'
})
export class DemoInputOutputComponent {
  javanais = ['Aline', 'Nathan', 'Pascal', 'Samuel', 'Geoffrey', 'Ismail', 'Gaetan', 'Lucas', 'Laurent', 'Elise']

  ajouterAuParent(chaine: string){
    this.javanais.push(chaine)
  }
}
