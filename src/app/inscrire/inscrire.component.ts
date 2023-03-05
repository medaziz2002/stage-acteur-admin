import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { admin } from '../Model/Admin.model';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  registreForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private toast :NgToastService,private adminService:AdminService)
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
        Validators.email

      ]),
      mdp: new FormControl('',[
        Validators.required,

      ])
    }

    this.registreForm = this.fb.group(formControls)
   }
   get email() { return this.registreForm.get('email') }
   get nom() { return this.registreForm.get('nom') }
   get prenom() { return this.registreForm.get('prenom') }
   get mdp() { return this.registreForm.get('mdp') }

  ngOnInit(): void {
  }
  inscrit() {
    let data = this.registreForm.value;
    console.log(data);
    let ad = new admin(
     null, data.nom, data.prenom,data.email,data.mdp);
    console.log(ad);
    if (

      data.nom == 0 ||
      data.prenom == 0  ||
      data.email == 0 ||
      data.mdp == 0
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.adminService.ajouterAdmin(ad).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Compter creer avec succes',
        });

        this.router.navigate(['/']);
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
