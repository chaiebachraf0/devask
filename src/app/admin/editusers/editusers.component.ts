import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

  constructor(private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['admin/users']);
    this.toastr.error('', 'Annulation');
  }
}
