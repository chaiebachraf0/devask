import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from 'src/app/services/register.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any
  constructor(private registerService:RegisterLoginService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getusers();
  }
  getusers(){
    this.registerService.Users().subscribe(res=>{
      this.user=res;
    })
  }
  delete(id:any){
    this.registerService.delete(id).subscribe(res=>{
      this.toastr.warning('avec succès', 'Utilisateur supprimé :)');
      this.getusers()
    })

  }


}
