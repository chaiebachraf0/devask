import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccComponent } from './acc/acc.component';
import { AuthGuard } from './auth.guards';
import { LoginAComponent } from './login-a/login-a.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:'',component:AccComponent,canActivate: [AuthGuard]},
  {path:'rvente',loadChildren:()=>import('./rvente/rvente.module').then(m=>m.RventeModule),canActivate: [AuthGuard]
},
  {path:'rcomf',loadChildren:()=>import('./rcomf/rcomf.module').then(m=>m.RcomfModule),canActivate: [AuthGuard]
},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
 },
 {path:'rachat',loadChildren:()=>import('./rachat/rachat.module').then(m=>m.RachatModule),canActivate: [AuthGuard]
},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'LoginA',component:LoginAComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


