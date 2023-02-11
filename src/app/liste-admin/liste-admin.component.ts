import { Router } from '@angular/router';
import { admin } from './../Model/Admin.model';
import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css']
})
export class ListeAdminComponent implements OnInit {

  admins!:admin[];
  p:number=1;
  constructor(private adminService:AdminService, private router:Router)
   {

   }



  ngOnInit(): void {

  this.chargerAdmin();

  }


  chargerAdmin()
  {
    this.adminService.listeAdmin().subscribe(admin=>
      {
        console.log(admin);
        this.admins=admin;
      });
  }



  supprimerAdmin(a:admin)
  {
    let conf=confirm("Etes-vous sur ?");
    if(conf)
    {
      this.adminService.supprimerAdmin(a.id).subscribe(()=>
      {
        console.log("admin supprimer");
        this.chargerAdmin();
        this.router.navigate(['liste-admin']);
        window.location.reload();
      })
    }

  }




}
