import { LivreurService } from './../services/livreur.service';
import { Livreur } from './../Model/Livreur.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-livreur',
  templateUrl: './modifier-livreur.component.html',
  styleUrls: ['./modifier-livreur.component.css']
})
export class ModifierLivreurComponent implements OnInit {


  currentLivreur=new Livreur();

  constructor(private livreurService:LivreurService , private router: Router,private activatedRouter:ActivatedRoute, ) { }

  ngOnInit(): void {
this.livreurService.consulterLivreur(
  this.activatedRouter.snapshot.params['id']).subscribe(
    livreur=>{this.currentLivreur=livreur;
    console.log(livreur);}
  )
  }


modifierLivreur()
{
  this.livreurService.modifierLivreur(this.currentLivreur).subscribe(livreur=>
    {
      console.log(livreur);
      this.router.navigate(['liste-livreur']);
      window.location.reload();
    }
  )

}








}
