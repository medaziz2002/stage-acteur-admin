import { Livreur } from './../Model/Livreur.model';
import { LivreurService } from './../services/livreur.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-livreur',
  templateUrl: './liste-livreur.component.html',
  styleUrls: ['./liste-livreur.component.css']
})
export class ListeLivreurComponent implements OnInit {

  p:number=1;
   livreurs!:Livreur[];
  constructor(private livreurService:LivreurService ,private router:Router ) { }

  ngOnInit(): void {
    this.chargerLivreur();
  }


chargerLivreur()
{
  this.livreurService.listeLivreur().subscribe(livreur=>
    {
      console.log(livreur);
      this.livreurs=livreur;
    })
}

supprimerLivreur(l:Livreur)
{
  let conf=confirm("Etes-vous sur ?");
  if(conf)
  {
    this.livreurService.supprimerLivreur(l.id).subscribe(()=>
    {
      console.log("livreur supprimer");
      this.chargerLivreur();
      this.router.navigate(['liste-livreur']);
    })
  }
}



  }


