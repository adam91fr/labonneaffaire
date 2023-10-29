import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [
  {path:"liste", redirectTo: ""},
  {path:"ajouter", component: AjouterComponent},
  {path:"", component: ListeComponent},
  {path:"details/:id", component: DetailComponent},
  {path:"**", component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
