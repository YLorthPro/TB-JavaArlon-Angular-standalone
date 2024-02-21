import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, JsonPipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {MiMajPipe} from "../pipes/mi-maj.pipe";

@Component({
  selector: 'app-demo-pipe',
  standalone: true,
  imports: [
    JsonPipe,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    MiMajPipe
  ],
  templateUrl: './demo-pipe.component.html',
  styleUrl: './demo-pipe.component.css'
})
export class DemoPipeComponent {
  javanais={
    nom: 'Depierreux',
    prenom: 'Geoffrey',
    age: 99
  }
  gaetan= new Date();
}
