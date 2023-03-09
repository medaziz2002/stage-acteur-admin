import { Livraison } from './../Model/Livraison.model';
import { Livreur } from './../Model/Livreur.model';
import { LivreurService } from './../services/livreur.service';
import { Commande } from './../Model/Commande.model';
import { CommandeService } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../services/livraison.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-livraison',
  templateUrl: './ajout-livraison.component.html',
  styleUrls: ['./ajout-livraison.component.css']
})
export class AjoutLivraisonComponent implements OnInit {




listLiv:Livreur[]
  listCommande:any=[]
  commandeId:number=0;
  livreurId:number=0;
  message:string="";
  constructor(private services:LivraisonService,private router:Router,private fb:FormBuilder)
  {}
  
  changerLiv(event:any)
  {
   this.livreurId=event;
  }
  changerCommande(event:any)
  {
   this.commandeId=event;
  }
  ngOnInit(): void {
  this.getLiv()
  this.commandeL()
  }
  getLiv()
  {
    this.services.getLiv().subscribe(liv => {
      this.listLiv = liv
      console.log("liv",this.listLiv)
    },err=>{
      console.log(err)
    })
  }
  commandeL()
  {
    this.services.getCommande().subscribe((data:any) => {
      this.listCommande = data
      console.log("comm",this.listCommande)
    })
  }
  add(liv:any,comm:any)
  {
    console.log(liv,comm)
    let rq:any={}
    rq.commande=this.commandeId
    console.log(rq.commande)
    rq.livreur=this.livreurId
    console.log(rq.livreur)
    console.log(rq)
    if(rq.commande!= 0 &&  rq.livreur!= 0)
    {
      this.services.addAffect(rq).subscribe((data:any)=>{
        this.message=`<div class="alert alert-success" role="alert">
        Livreur affacté ! 
      </div>`
       },err=>{
         this.message=`<div class="alert alert-warning" role="alert">
         Livreur déjà affacté ! 
       </div>`
       })
    }else
    {
      this.message=`<div class="alert alert-warning" role="alert">
     choix livreur et comande obligatoire ! 
    </div>`
    }
    setTimeout(() => {
      this.message=""
    }, 3000);
    
  }



}



