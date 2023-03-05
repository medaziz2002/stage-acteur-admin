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
import { AuthGuard } from './services/Authguard.service';

const routes: Routes = [

  {path:"ajout-admin" ,component:AjoutAdminComponent,canActivate:[AuthGuard]},
  {path:"ajout-livreur" ,component:AjoutLivreurComponent,canActivate:[AuthGuard]},
  {path:"liste-livreur" ,component:ListeLivreurComponent,canActivate:[AuthGuard]},
  {path:"ajout-commande" , component:AjoutCommandeComponent,canActivate:[AuthGuard]},
  {path:"liste-commande", component:ListeCommandeComponent,canActivate:[AuthGuard]},
  {path:"liste-contact" ,component:ListeContactComponent,canActivate:[AuthGuard]},
  {path:"modifier-admin/:id",component:ModifierAdminComponent,canActivate:[AuthGuard]},
  {path:"modifier-livreur/:id",component:ModifierLivreurComponent,canActivate:[AuthGuard]},
  {path:"modifier-commande/:id",component:ModifierCommandeComponent,canActivate:[AuthGuard]},
  {path:"" , component:LoginComponent},
  {path:"liste-admin",component:ListeAdminComponent,canActivate:[AuthGuard]},
  {path:"inscrit",component:InscrireComponent},
  {path:"profil",component:ProfilComponent,canActivate:[AuthGuard]},
  {path:"index",component:IndexComponent,canActivate:[AuthGuard]},
  {path:"ajout-livraison",component:AjoutLivraisonComponent,canActivate:[AuthGuard]},
  {path:"liste-livraison",component:ListeLivraisonComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
