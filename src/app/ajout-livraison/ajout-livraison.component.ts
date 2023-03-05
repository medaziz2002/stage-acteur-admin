import { Livraison } from './../Model/Livraison.model';
import { Livreur } from './../Model/Livreur.model';
import { LivreurService } from './../services/livreur.service';
import { Commande } from './../Model/Commande.model';
import { CommandeService } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../services/livraison.service';

@Component({
  selector: 'app-ajout-livraison',
  templateUrl: './ajout-livraison.component.html',
  styleUrls: ['./ajout-livraison.component.css']
})
export class AjoutLivraisonComponent implements OnInit {

  cmds:Commande[];
  livs:Livreur[];
  val1!:number;
  val2!:number;

  constructor(private commandeService:CommandeService,private livreurService:LivreurService,private livraisonService:LivraisonService) { }

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


ajoutCommande1()
{
this.livraisonService.ajoutCommande1(this.val1).subscribe(res1=>{
  console.log(res1);
})
this.livraisonService.ajoutCommande2(this.val2).subscribe(res2=>{
  console.log(res2);
})
}



}
