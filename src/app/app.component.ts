import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { interval, pipe, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'labonneaffaire';
  liste;
  // prix1: number =80;
  // prix2: number =230;
  // prix3: number =15;
  message:string = "";
  
  secondes; //: number=0;
  compteurSubscription: 
  Subscription;
  constructor(private dataService:DataService){}
  ngOnInit(): void {
      // console.log("Ici ngOnInit()");
      this.liste=this.dataService.listeArticles

      const compteur=interval(1000).pipe(
        filter(value => value %2 === 0),
        map(value => value % 2 ===0?
          `${value} (est pair)` :
          `${value} (est impair)` 
      )
      );

          this.compteurSubscription=compteur.subscribe({
        next: (v) => this.secondes =v,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }

  onAffiche(arg: string) {
    return this.message="Merci d'avoir voté pour l'article : " + arg; 
  }

  ngOnDestroy() {
    this.compteurSubscription.unsubscribe();
  }
}
