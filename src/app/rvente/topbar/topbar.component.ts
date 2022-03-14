import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
echeance:any;
produit:any;
nbp:any;
nbe:any;
  constructor(private notification : NotificationService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  //  setInterval(() => {
  //     this.getnotificationecheance(),this.getnotificationproduit();
  //   }, 3000);
  }

getnotificationecheance(){
    this.notification.getEcheancec().subscribe(res=>{
    this.echeance=res
    this.nbe=0
    this.nbe+=this.echeance.length;
    console.log(this.nbe);
    console.log(this.echeance);
});}

getnotificationproduit(){
  this.notification.getProduit().subscribe(res=>{
  this.produit=res
  this.nbp=0;
  this.nbp+=this.produit.length;
  console.log(this.nbp);
  console.log(this.produit);
});}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
    this.toastr.success('', 'Déconnexion effectuée');
  }

}
