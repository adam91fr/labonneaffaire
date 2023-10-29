import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  id;
  titre: string;
  prix: number;
  description: string;
  urlImg: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ){}

  ngOnInit(){
    const id=this.route.snapshot.params["id"];
    this.id=id;
    this.titre=this.dataService.getArticle(id).titreArticle;
    this.prix=this.dataService.getArticle(id).prixArticle;
    this.description=this.dataService.getArticle(id).description;
    this.urlImg=this.dataService.getArticle(id).urlImg;
  }
}
