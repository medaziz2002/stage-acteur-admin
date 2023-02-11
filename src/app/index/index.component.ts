import { LivreurService } from './../services/livreur.service';
import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  totalAdmin:number=0;
  totalCommande:number=0;
  totalLivreur:number=0;
  constructor(private adminService:AdminService,private commandeService:CommandeService,private livreurService:LivreurService ) { }

  ngOnInit(): void {
    this.adminService.listeAdmin().subscribe(admin =>{
      this.totalAdmin=admin.length})

      this.commandeService.listeCommande().subscribe(
        commande=>{
          this.totalCommande=commande.length
        }
      )
this.livreurService.listeLivreur().subscribe(livreur=>
  {
    this.totalLivreur=livreur.length
  })

  }



}
