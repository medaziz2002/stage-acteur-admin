import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { admin } from '../Model/Admin.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userDetails:any;
  currentAdmin=new admin();

  constructor(private loginService:LoginService,
    private activatedRouter:ActivatedRoute,
    private router:Router,
    private adminService:AdminService

    ) {
    this.userDetails = this.loginService.userDetails();
   }

  ngOnInit(): void {

  }


  modifierAdmin()
{
  this.adminService.modifierAdmin(this.userDetails).subscribe(admin=>{
    console.log(admin);
    this.router.navigate(['']);
  });


}






}
