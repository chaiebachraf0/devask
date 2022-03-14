import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AdminComponent } from './admin.component';
import { EditusersComponent } from './editusers/editusers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:AdminComponent,
  children:[
    {path:'',component:UsersComponent},
    {path:'addusers',component:AddusersComponent},
    {path:'editusers/:id',component:EditusersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
