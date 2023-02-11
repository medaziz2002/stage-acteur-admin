import { AdminService } from './../services/admin.service';
import { ContactService } from './../services/contact.service';
import { LoginComponent } from './../login/login.component';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../Model/Contact.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

a:number;
totalContact:number=0;
pers:Contact[];
username: string;
userDetails:any;
  constructor(private contactService:ContactService,private loginService:LoginService,private router:Router)
  {
    this.userDetails = this.loginService.userDetails();
  }

  ngOnInit(): void {


    console.log("apres decode"+this.userDetails);

   this.count();




      this.contactService.listeContact().subscribe(per=>{
        console.log(per);
        this.pers=per;
      })

    }
 //this.username=this.loginService.loggedUser;
 count(){
 this.contactService.nombreContact().subscribe(count=>{

  console.log(count);

  this.totalContact=count;

})
 }

logout()
{
  console.log("logout");
  localStorage.clear();
  this.router.navigate(['']);
}





  }










