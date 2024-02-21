import { Component } from '@angular/core';
import {ListeService} from "../services/liste.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-demo-services',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './demo-services.component.html',
  styleUrl: './demo-services.component.css'
})
export class DemoServicesComponent {
  valeur: string = '';

  listeEntiere: string [] = [];

  constructor(private _listeService: ListeService) {
    this.avoirTout()
  }

  ajouterMachin(){
    this._listeService.ajouter(this.valeur)
    this.valeur = ''
    this.avoirTout()
  }

  avoirTout(){
    this.listeEntiere = this._listeService.getAll()
  }
}
