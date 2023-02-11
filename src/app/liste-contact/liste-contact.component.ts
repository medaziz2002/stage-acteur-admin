import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Model/Contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent implements OnInit {
  p:number=1;
  contacts !:Contact[];
  constructor(private contactService:ContactService, private router:Router) { }

  ngOnInit(): void {
    this.chargerContact();
  }



chargerContact()
{
  this.contactService.listeContact().subscribe(contact=>{

    console.log(contact);
    this.contacts=contact;

  });
}

supprimerContact(l:Contact)
{
  let conf=confirm("Etes-vous sur ?");
  if(conf)
  {
    this.contactService.supprimerContact(l.id).subscribe(()=>
    {
      console.log("livreur supprimer");
      this.chargerContact();
      window.location.reload();
      this.router.navigate(['liste-contact']);
    })
  }
}



}
