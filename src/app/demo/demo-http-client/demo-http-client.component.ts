import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/User";
import {DemoPostService} from "../services/demo-post.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {map, Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-demo-http-client',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './demo-http-client.component.html',
  styleUrl: './demo-http-client.component.css'
})
export class DemoHttpClientComponent implements OnInit, OnDestroy{
  tableau!: User[];
  user1!: Observable<string>;
  $destroyed = new Subject<boolean>();
  constructor(private readonly _demoPostService: DemoPostService) {
  }

  ngOnInit() {
    this._demoPostService.getAll().pipe(
      takeUntil(this.$destroyed)
    ).subscribe({
        next: (valeur) => this.tableau=valeur,
        error:(err)=>console.log(err.error()),
        complete:()=>console.log("Chargement terminé")
      }
    );
    this.user1 = this._demoPostService.getOne().pipe(
      map(e => e.name)
    )
  }

  ngOnDestroy(): void {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

  envoyer(chose: User){
    this._demoPostService.insert(chose).subscribe()
  }
}
