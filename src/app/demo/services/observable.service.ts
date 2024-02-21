import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  nombre = new BehaviorSubject<number>(0);
  tableauDeNombre = new BehaviorSubject<number[]>([1,2,3,4,5])
  constructor() { }

  nouvelleValeur(nombre: number){
    this.nombre.next(nombre);
  }
}
