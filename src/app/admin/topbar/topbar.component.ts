import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['']);
    // this.toastr.success('', 'Déconnexion effectuée');
  }
}
