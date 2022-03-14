import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { EditusersComponent } from './editusers/editusers.component';


@NgModule({
  declarations: [AdminComponent,AccueilComponent, SidebarComponent, TopbarComponent, FooterComponent, UsersComponent, AddusersComponent, EditusersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AdminModule { }
