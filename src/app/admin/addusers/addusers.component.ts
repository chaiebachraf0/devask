import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/confirmed.validator';
import { RegisterLoginService } from 'src/app/services/register.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  form:FormGroup | any;
  submitted:false | any;
  data:any;
constructor(private formBuilder:FormBuilder,private toastr: ToastrService,private registerService:RegisterLoginService ,private router:Router) { }
  createForm(){
     this.form=this.formBuilder.group({
     name:[null,Validators.required],
     email:['',Validators.required,Validators.email],
     password:['',[Validators.required,Validators.minLength(6)]],
     passwordr:['',Validators.required]
    },{
      validator: MustMatch('password','passwordr')
    }
    );
  }
 ngOnInit(): void {
   this.createForm();
 }
 get f(){
   return this.form.controls;
 }
 submit(){
   this.submitted=true;
   if(this.form.invalid){
     return;
   }
   this.registerService.registerUser(this.form.value).subscribe(res =>{
     this.data = res;
     console.log(res);
     if(this.data.status ===1){
       this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
         timeOut:2000,
         progressBar:true
       });
       this.router.navigate(['admin']);

     }else{
       this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
         timeOut:2000,
         progressBar:true
       });
     }
     this.submitted=false;
     this.form.get('name').set('');
     this.form.get('email').set('');
     this.form.get('password').set('');
     this.form.get('passwordr').set('');
   });
 }
  annuler(){
    this.router.navigate(['admin']);
    this.toastr.error('', 'Annulation');
  }
}
