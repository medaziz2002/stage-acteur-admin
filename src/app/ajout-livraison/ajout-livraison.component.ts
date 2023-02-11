import { Livraison } from './../Model/Livraison.model';
import { Livreur } from './../Model/Livreur.model';
import { LivreurService } from './../services/livreur.service';
import { Commande } from './../Model/Commande.model';
import { CommandeService } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-livraison',
  templateUrl: './ajout-livraison.component.html',
  styleUrls: ['./ajout-livraison.component.css']
})
export class AjoutLivraisonComponent implements OnInit {

  cmds:Commande[];
  livs:Livreur[];

  constructor(private commandeService:CommandeService,private livreurService:LivreurService) { }

  ngOnInit(): void {
    this.commandeService.listeCommande().subscribe(cmd=>{
     console.log(cmd);
     this.cmds=cmd;
    })

    this.livreurService.listeLivreur().subscribe(liv=>{
      console.log(liv);
      this.livs=liv;
     })
  }






}
