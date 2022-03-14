import { EditProductsComponent } from './editproduct/editproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RventeRoutingModule } from './rvente-routing.module';
import { RventeComponent } from './rvente.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { FactdetailsComponent } from './factdetails/factdetails.component';
import { EditfactComponent } from './editfact/editfact.component';
import { EditdevisComponent } from './editdevis/editdevis.component';
import { DevisdetailsComponent } from './devisdetails/devisdetails.component';
import { EditcommcComponent } from './editcommc/editcommc.component';
import { CommdetailsComponent } from './commdetails/commdetails.component';
import { EditbonlComponent } from './editbonl/editbonl.component';
import { BonldetailsComponent } from './bonldetails/bonldetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddproductComponent } from './addproduct/addproduct.component';
@NgModule({
  declarations: [RventeComponent, SidebarComponent, TopbarComponent, AsidebarComponent, FooterComponent,AddClientComponent,ClientDetailsComponent,EditClientComponent,ProductDetailsComponent, FactdetailsComponent, EditfactComponent, EditdevisComponent, DevisdetailsComponent, EditcommcComponent, CommdetailsComponent, EditbonlComponent, BonldetailsComponent,AddproductComponent,EditProductsComponent],
  imports: [
    CommonModule,
    RventeRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class RventeModule { }
