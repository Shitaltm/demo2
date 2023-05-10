import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './College/home/home.component';
import { AdmiComponent } from './College/admi/admi.component';
import { DepartComponent } from './College/depart/depart.component';
import { StudComponent } from './College/stud/stud.component';
import { StaffComponent } from './College/staff/staff.component';
import { LoginComponent } from './College/login/login.component';
import { PrimeNgComponent } from './College/prime-ng/prime-ng.component';

const routes: Routes = [
  {path:" ", component:HomeComponent},
  {path:"admi", component:AdmiComponent},
  {path:"depart", component:DepartComponent},
  {path:"stud",component:StudComponent},
  {path:"staff",component:StaffComponent},
  {path:"login", component:LoginComponent},
  {path:"prime-ng", component:PrimeNgComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
