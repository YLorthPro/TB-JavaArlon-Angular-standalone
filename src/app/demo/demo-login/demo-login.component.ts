import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Utilisateur} from "../models/Utilisateur";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-demo-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './demo-login.component.html',
  styleUrl: './demo-login.component.css'
})
export class DemoLoginComponent {
  data = {
    login: '',
    password: ''
  }

  connectedUser?: Utilisateur;

  constructor(
    // Injection de mon service login
    private readonly loginService: LoginService
  ){}

  connection() {
    // Si l'utilisateur n'a rien tapé dans le login, on n'appelle pas le service pour rien
    if (this.data.login.trim()) {
      this.loginService.connect(this.data.login, this.data.password);
      this.connectedUser = this.loginService.connectedUser;
      // Remise à zéro du formulaire
      if (this.connectedUser) {
        this.data.login = '';
        this.data.password = '';
      }
    }
  }

  disconnect() {
    this.loginService.disconnect();
    this.connectedUser = this.loginService.connectedUser;
  }
}
