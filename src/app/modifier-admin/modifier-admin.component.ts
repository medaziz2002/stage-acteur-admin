import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { admin } from '../Model/Admin.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent implements OnInit {
  currentAdmin=new admin();

  constructor(
    private activatedRouter:ActivatedRoute,
    private router:Router,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.consulterAdmin(this.activatedRouter.snapshot.params['id']).
    subscribe(admin=>{this.currentAdmin=admin;
    console.log(admin);})
  }






modifierAdmin()
{
  this.adminService.modifierAdmin(this.currentAdmin).subscribe(admin=>{
    console.log(admin);
    this.router.navigate(['liste-admin']);
    window.location.reload();
  });


}



}
