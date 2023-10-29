import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // titreArticle: string = "Titre de l'article";
  // prixArticle: number=12
  //textAltImg: string = "Titre alternatif de l'image";
  //urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike: number=0;
  comment:string = "Ceci est un commentaire";
  // dispo: boolean=false;

  @Output() info=new EventEmitter<string>();
  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() textAltImg: string;
  @Input() dispo: boolean;
  @Input() idArticle: number;
  jaime: boolean=true;

  constructor() { }
  
  ngOnInit(): void{
  }

  onLike(){
    if (this.jaime===true) {
      this.totalNbrLike++;
      this.jaime=false;
    } else {
      this.totalNbrLike--;
      this.jaime=true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor() {
    if (this.dispo === true) {
      return "green"
    } else {
      return "red"
    }
  }
}
