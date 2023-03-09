import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from '../Model/Admin.model';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.css']
})
export class AjoutAdminComponent implements OnInit {

newAdmin = new admin();
addAdminForm:FormGroup;


  constructor(private adminService:AdminService, private router:Router,private fb:FormBuilder,private toast :NgToastService)
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


      mdp: new FormControl('',[
        Validators.required,

      ])}
      this.addAdminForm = this.fb.group(formControls);
  }

  get nom() {
    return this.addAdminForm.get('nom');
  }
  get prenom() {
    return this.addAdminForm.get('prenom');
  }
  get email() {
    return this.addAdminForm.get('email');
  }

  get mdp() {
    return this.addAdminForm.get('mdp');
  }


  addNewAdmin() {
    let data = this.addAdminForm.value;
    console.log(data);
    let admis = new admin(
     undefined, data.nom,data.prenom,data.email,data.mdp);
    console.log(admin);

    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email == 0 ||

      data.mdp == 0

    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.adminService.ajouterAdmin(admis).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Ajout faite avec success',
        });

        this.router.navigate(['/liste-admin']);
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

  ngOnInit(): void {

  }


 /* addAdmin()
  {
    this.adminService.ajouterAdmin(this.newAdmin)
    .subscribe(admin=>{
      console.log(admin);
      this.router.navigate(['liste-admin']);
    });
  }*/


  /*

form  [formGroup]="loginForm" (ngSubmit)="addNewAdmin()"

formControlName="nom" name="nom"

sous imput dans tout input

<div *ngIf="this.nom?.touched && this.nom?.invalid">
              <small class="text-danger" *ngIf="this.nom?.errors?.['required']">nom
                  est obligatoire</small>
</div>


  */


}


