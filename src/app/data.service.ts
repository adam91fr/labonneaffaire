import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles=[
    {
      id:1,
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false
  },
  {
    id:2,
    titreArticle: "TV", 
    prixArticle: 230,
    description: "Très bonne résolution",
    urlImg: "../assets/images/tv.jpeg",
    textAltImg: "Une télévision",
    dispo: true
  },
  {
    id:3,
    titreArticle: "Jouet", 
    prixArticle: 15,
    description: "Neuf, jamais utilisé",
    urlImg: "../assets/images/jouet.jpeg",
    textAltImg: "Un jouet",
    dispo: true
  } ]
  // listeArticles: any = []

  constructor() { }
  // constructor(private httpClient: HttpClient) { }

  getArticle(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id==id;
    });
    return articles
  }

  getListFromServer() {
    // return this.httpClient.get<any[]>("https://labonneaffaire-ec69f-default-rtdb.europe-west1.firebasedatabase.app/data.json")
  }
}
