
import { Router } from '@angular/router';
import { LivreurService } from './../services/livreur.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Livreur } from '../Model/Livreur.model';

@Component({
  selector: 'app-ajout-livreur',
  templateUrl: './ajout-livreur.component.html',
  styleUrls: ['./ajout-livreur.component.css']
})
export class AjoutLivreurComponent implements OnInit {

  newLivreur=new Livreur();
  addLivreurForm:FormGroup;
  constructor(private livreurService :LivreurService, private router:Router,private fb:FormBuilder,private toast :NgToastService)
   {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,

      ]),
      prenom: new FormControl('',[
        Validators.required,

      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,

      ]),
      numtel: new FormControl('',[
        Validators.required,


      ]),

      mdp: new FormControl('',[
        Validators.required,

      ])}
      this.addLivreurForm = this.fb.group(formControls);
    }

    get nom() {
      return this.addLivreurForm.get('nom');
    }
    get prenom() {
      return this.addLivreurForm.get('prenom');
    }
    get email() {
      return this.addLivreurForm.get('email');
    }

    get numtel() {
      return this.addLivreurForm.get('numtel');
    }
    get mdp() {
      return this.addLivreurForm.get('mdp');
    }

  ngOnInit(): void {
  }

  addNewLivreur() {
    let data = this.addLivreurForm.value;
    console.log(data);
    let liv = new Livreur(undefined,data.nom,data.prenom,data.email,data.numtel,data.mdp);
    console.log(liv);

    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email == 0 ||
     data.numtel == 0||
      data.mdp == 0

    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.livreurService.ajouterLivreur(liv).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });

        this.router.navigate(['/liste-livreur']);
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        }); }
    )

    }
  }





}
