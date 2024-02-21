import { Component } from '@angular/core';
import {map} from "rxjs";
import {ObservableService} from "../services/observable.service";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-demo-observables',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './demo-observables.component.html',
  styleUrl: './demo-observables.component.css'
})
export class DemoObservablesComponent {
  nombre!: number;
  tab!: number[];
  input!: number;
  constructor(private _observableService: ObservableService) {
  }

  ngOnInit() {
    this._observableService.nombre.subscribe(
      value => {
        this.nombre=value
      }
    )
    this._observableService.tableauDeNombre.pipe(
      map((tab)=>tab.filter(element => element%2 == 0))
    ).subscribe({
      next: (valeur)=>{
        console.log("Tout s'est bien passé")
        this.tab=valeur;
      },
      error: (err)=>console.log("Aie aie aie Geoffrey a tout cassé"),
      complete: ()=>console.log ("Terminé")
    })
  }

  unsubscribe(){
    this._observableService.nombre.unsubscribe();
  }

  nouvelleValeur(){
    this._observableService.nouvelleValeur(this.input);
  }
}
