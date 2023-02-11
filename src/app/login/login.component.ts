import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { admin } from '../Model/Admin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

loginForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private toast :NgToastService
    ,private loginService:LoginService)
  {

      let formControls = {
        email: new FormControl('',[
          Validators.required,
          Validators.email

        ]),
        mdp: new FormControl('',[
          Validators.required,

        ])
      }

      this.loginForm = this.fb.group(formControls)

  }



  ngOnInit(): void {
    let isLoggedIn = this.loginService.isLoggedIn();


    if (isLoggedIn) {




      this.router.navigate(['login']);
    }

  }

  get email() { return this.loginForm.get('email') }
  get mdp() { return this.loginForm.get('mdp') }

  login() {
    let data = this.loginForm.value;
    console.log(data);
    let ad = new admin(
     null, null, null,data.email,data.mdp);
    console.log(ad);
    if (

      data.email == 0 ||
      data.mdp == 0
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {

      this.loginService.loginAdmin(ad).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken",token);
          this.router.navigate(['/liste-admin']);
        },
        err=>{
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: ' compte ne existe pas ',
          });

        }
      )

    }

    }

}
