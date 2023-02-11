import { ListeLivraisonComponent } from './liste-livraison/liste-livraison.component';
import { AjoutLivraisonComponent } from './ajout-livraison/ajout-livraison.component';
import { LoginComponent } from './login/login.component';
import { ModifierLivreurComponent } from './modifier-livreur/modifier-livreur.component';
import { ModifierCommandeComponent } from './modifier-commande/modifier-commande.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { ListeLivreurComponent } from './liste-livreur/liste-livreur.component';
import { AjoutLivreurComponent } from './ajout-livreur/ajout-livreur.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [

  {path:"ajout-admin" ,component:AjoutAdminComponent},
  {path:"ajout-livreur" ,component:AjoutLivreurComponent},
  {path:"liste-livreur" ,component:ListeLivreurComponent},
  {path:"ajout-commande" , component:AjoutCommandeComponent},
  {path:"liste-commande", component:ListeCommandeComponent},
  {path:"liste-contact" ,component:ListeContactComponent},
  {path:"modifier-admin/:id",component:ModifierAdminComponent},
  {path:"modifier-livreur/:id",component:ModifierLivreurComponent},
  {path:"modifier-commande/:id",component:ModifierCommandeComponent},
  {path:"" , component:LoginComponent},
  {path:"liste-admin",component:ListeAdminComponent},
  {path:"inscrit",component:InscrireComponent},
  {path:"profil",component:ProfilComponent},
  {path:"index",component:IndexComponent},
  {path:"ajout-livraison",component:AjoutLivraisonComponent},
  {path:"liste-livraison",component:ListeLivraisonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
