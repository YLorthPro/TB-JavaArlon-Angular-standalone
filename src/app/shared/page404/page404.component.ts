import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class Page404Component {
  backgroundColor: string = 'chartreuse';

  ngOnInit(): void {
    this.cestLaFete();
  }

  cestLaFete() {
    setInterval(() => {
      this.backgroundColor = this.couleurRandom();
    }, 500);
  }

  private couleurRandom(): string{
    const min= 0, max = 255;

    const red= Math.floor(Math.random()*(max-min+1)+min)
    const green= Math.floor(Math.random()*(max-min+1)+min)
    const blue= Math.floor(Math.random()*(max-min+1)+min)

    return `rgb(${red}, ${green}, ${blue})`
  }

}
