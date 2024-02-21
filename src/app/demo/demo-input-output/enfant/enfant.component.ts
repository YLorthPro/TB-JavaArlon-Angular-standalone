import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  //parent -> enfant
  @Input() liste!: string[];

  //enfant -> parent
  @Output('ajouter')
  eventEmitter = new EventEmitter<string>();

  //version slides
  //enventEmitter: EventEmitter<string>;
  //constructor(){this.eventEmitter = new EventEmitter<string>();}

  envoyer(){
    this.eventEmitter.emit("Votre valeur")
  }
}
