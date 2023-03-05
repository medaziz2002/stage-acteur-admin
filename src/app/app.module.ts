import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { AjoutLivreurComponent } from './ajout-livreur/ajout-livreur.component';
import { ListeLivreurComponent } from './liste-livreur/liste-livreur.component';
import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierLivreurComponent } from './modifier-livreur/modifier-livreur.component';
import { ModifierCommandeComponent } from './modifier-commande/modifier-commande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {NgToastModule} from 'ng-angular-popup';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ProfilComponent } from './profil/profil.component';
import { ListeLivraisonComponent } from './liste-livraison/liste-livraison.component';
import { AjoutLivraisonComponent } from './ajout-livraison/ajout-livraison.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutAdminComponent,
    ListeAdminComponent,
    AjoutLivreurComponent,
    ListeLivreurComponent,
    AjoutCommandeComponent,
    ListeCommandeComponent,
    ListeContactComponent,
    ModifierAdminComponent,
    ModifierLivreurComponent,
    ModifierCommandeComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    InscrireComponent,
    ProfilComponent,
    ListeLivraisonComponent,
    AjoutLivraisonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxPaginationModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
