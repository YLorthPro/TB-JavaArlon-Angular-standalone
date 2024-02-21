import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  private liste: string[] = ['coucou']
  constructor() { }

  getAll(){
    return this.liste
  }

  ajouter(nom: string){
    this.liste.push(nom);
  }

}
